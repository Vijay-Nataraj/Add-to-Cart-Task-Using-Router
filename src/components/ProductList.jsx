const ProductList = ({ product, addToCart }) => {
  return (
    <div className="flex items-center bg-white my-5 mx-20 p-5 rounded-lg shadow-md transition-all duration-100 ease-linear hover:shadow-gray-400 hover:scale-105">
      <img
        src={product.image}
        className="w-40 h-40 object-contain mr-5"
        alt={product.title}
      />
      <div className="flex-grow">
        <h3 className="mb-3 text-lg font-semibold">{product.title}</h3>
        <p className="mb-3 text-lg font-semibold text-blue-900">
          ${product.price}
        </p>
        <p className="mb-5 text-md font-normal overflow-hidden text-ellipsis">
          {product.description}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
