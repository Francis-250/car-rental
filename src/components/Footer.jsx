import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mx-6 border-b mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Munyankindi Car Rentals</h2>
          <p className="text-sm text-gray-400">
            Your trusted partner for hassle-free car rentals.
          </p>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link
            to="/car-listing"
            className="text-gray-300 hover:text-white capitalize"
          >
            model
          </Link>
        </nav>
        <div className="text-gray-400 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Munyankindi Car Rentals. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
