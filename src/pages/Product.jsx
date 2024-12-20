import ProductList from "../components/ProductList";

const Product = ({ products, addToCart }) => {
  return (
    <div className="p-4">
      {products.map((product) => (
        <ProductList key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Product;
