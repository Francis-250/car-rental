import { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { menu } from "../assets/asset";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 lg:px-[5em] shadow-xl lg:border-b lg:shadow-none bg-[#f9f9f9] fixed w-full left-0 top-0">
      <Link to={`/`} className="flex uppercase text-xl gap-2 font-semibold">
        <span className="text-black">rent</span>
        <span className="text-[#93AA9C] md:flex hidden">drive</span>
      </Link>

      {/* Desktop Menu */}
      <div className="lg:flex hidden gap-6">
        {menu.map((m, i) => (
          <Link
            key={i}
            to={m.link}
            className="capitalize text-lg hover:text-[#93AA9C] transition-colors duration-300"
          >
            {m.label}
          </Link>
        ))}
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col gap-4 p-4">
            {menu.map((m, i) => (
              <Link
                key={i}
                to={m.link}
                className="capitalize text-lg hover:text-[#93AA9C] transition-colors duration-300"
                onClick={toggleMenu}
              >
                {m.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center gap-4">
        <Link
          to={`/car-listing`}
          className="px-6 py-3 flex items-center gap-2 bg-black text-white rounded-full hover:bg-[#93AA9C] transition-colors duration-300"
        >
          <span className="text-lg">Explore Cars</span>
          <FaArrowRight className="text-xl" />
        </Link>
      </div>
      <div className="lg:hidden flex items-center gap-4">
        <div
          className="border p-3 rounded-full cursor-pointer hover:bg-[#93AA9C] hover:text-gray-200 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <HiMenuAlt3 />}
        </div>
      </div>
    </div>
  );
};

export default Header;
