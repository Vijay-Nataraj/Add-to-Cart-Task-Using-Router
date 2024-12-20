import CartList from "../components/CartList";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountedPrice = totalPrice * 0.9; // 10% discount

  return (
    <div className="my-4 bg-[#F0F4F8] p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center my-4">Shopping Cart</h2>
      <CartList
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <p className="text-lg font-semibold mt-4 text-gray-800">
        Total Price: ${totalPrice.toFixed(2)}
      </p>
      <p className="text-lg font-semibold text-gray-800">
        Discounted Price: ${discountedPrice.toFixed(2)} (
        <span className="text-green-600">-10%</span>)
      </p>
    </div>
  );
};

export default Cart;
