import { useState } from "react";
import { FaSearch, FaBell, FaUserCircle, FaCartPlus } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import MenuSidebar from "./MenuSidebar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white p-3 px-6 flex justify-between items-center fixed w-full z-50 shadow-sm">
      {/* Left Section */}
      <div className="flex gap-6 text-black items-center">
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiMenuAlt3 className="text-xl cursor-pointer" />
        </button>
        <Link to="/" className="text-xl font-semibold text-[#FF0000]">
          RentDrive
        </Link>
      </div>

      {/* SideBar */}
      {menuOpen && (
        <div className="fixed hidden">
          <MenuSidebar />
        </div>
      )}

      {/* Middle Section */}
      <div className="flex items-center w-1/2 max-w-2xl">
        <div className="flex bg-[#F6F6F6] items-center px-4 rounded-full w-full border border-gray-300 focus-within:border-blue-500">
          <input
            type="text"
            className="outline-none bg-transparent p-2 w-full placeholder-gray-500"
            placeholder="Search cars by name, price, etc."
          />
          <button className="p-2 rounded-r-full bg-gray-100 hover:bg-gray-200">
            <FaSearch className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 items-center">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FaBell className="text-xl text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FaCartPlus className="text-xl text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FaUserCircle className="text-xl text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Header;
