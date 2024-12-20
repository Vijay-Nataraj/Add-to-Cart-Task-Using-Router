const CartList = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <p className="text-2xl font-semibold text-center mt-6">
          Your cart is empty.
        </p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white my-5 mx-20 p-5 rounded-lg shadow-md transition-all duration-100 ease-linear hover:shadow-gray-400 hover:scale-105"
            >
              <img
                src={item.image}
                className="w-40 h-40 object-contain mr-5"
                alt={item.title}
              />
              <div className="flex-grow w-96 mr-5">
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="mb-3 text-lg font-semibold text-gray-700">
                  {`${item.quantity} * ${item.price} = ${
                    item.quantity * item.price
                  }`}
                </p>
                <p className="mb-5 text-md font-normal overflow-hidden text-ellipsis">
                  {item.description}
                </p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-16 border-black border-2 rounded text-center"
                />
              </div>
              <div className="w-40">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;
