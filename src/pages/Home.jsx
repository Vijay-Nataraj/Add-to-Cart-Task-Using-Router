import Product from "./Product";
import { useLoaderData } from "react-router-dom";

const Home = ({ addToCart }) => {
  const products = useLoaderData();

  return (
    <div className="bg-[#FBE9D0] min-h-screen">
      <h2 className="text-3xl font-bold text-center pt-5 text-gray-800">
        Product List
      </h2>
      <Product products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
