import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#aa0000] z-[1000] fixed top-0 w-full text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold">
              ProductFlow
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/"
              className="hover:bg-red-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:bg-red-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="hover:bg-red-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:bg-red-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <FaSearch className="text-2xl cursor-pointer md:hidden" />
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-full px-4 py-2 text-black focus:outline-none"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600" />
            </div>
            <Link
              to="/login"
              className="hidden md:flex bg-white text-red-600 hover:bg-gray-200 px-4 py-2 rounded-full font-semibold items-center space-x-2"
            >
              <FaUser />
              <span>Login</span>
            </Link>
            <button
              className="text-white focus:outline-none md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-red-700"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block px-4 py-2 hover:bg-red-700"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-red-700"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-red-700"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 hover:bg-red-700"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}