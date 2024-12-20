import { Outlet, Link } from "react-router-dom";

const Navwrapper = () => {
  return (
    <div>
      <nav className="h-28 bg-teal-600 rounded-md text-white flex items-center justify-between px-4 md:px-10 shadow-lg">
        <h1 className="text-2xl font-bold">FAKESTORE API</h1>

        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-xl font-normal hover:font-bold hover:text-yellow-300 transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="text-xl font-normal hover:font-bold hover:text-yellow-300 transition duration-300"
          >
            Cart &nbsp;
            <span>
              <i className="bi bi-cart3"></i>
            </span>
          </Link>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navwrapper;
