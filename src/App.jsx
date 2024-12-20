import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navwrapper from "./wrappers/Navwrapper";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import productsLoader from "./loader/productsLoader";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const routes = [
    {
      path: "/",
      element: <Navwrapper />,
      children: [
        {
          path: "/",
          element: <Home addToCart={addToCart} />,
          loader: productsLoader,
          hydrateFallbackElement: <div>Loading...</div>,
        },
        {
          path: "/cart",
          element: (
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ),
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_skipActionStatusRevalidation: true,
    },
  });

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default App;
