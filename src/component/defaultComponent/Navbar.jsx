import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../images/profule.png";
import Logout from "../landingPages/Authcation/Logout";
import { AuthContext } from "./Contaxt";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { loggedUser } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
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
            <Link to="/products">
              <FaSearch className="text-2xl cursor-pointer md:hidden" />
            </Link>
            <div className="relative hidden md:block">
              <Link to="/products">
                <button className="rounded-full text-left w-[150px] px-4 py-2 bg-white text-black ">
                  Search...
                </button>
              </Link>
              <Link to="/products">
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600" />
              </Link>
            </div>
            {loggedUser ? (
              <div className="relative">
                <img
                  src={loggedUser.photoURL || profile}
                  className="w-[40px] h-[40px] cursor-pointer rounded-full"
                  alt="Profile"
                  onClick={toggleProfileMenu}
                />
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48">
                    <div className="p-2">
                      <p className="font-medium">
                        {loggedUser.displayName || "User"}
                      </p>
                      <button className="bg-red-500 mt-5 mb-2 text-white px-4 w-full py-2 rounded-lg hover:bg-red-600 transition">
                        <Link to="/edit-profile">Edit Profile</Link>
                      </button>

                      <Logout />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex bg-white text-red-600 hover:bg-gray-200 px-4 py-2 rounded-full font-semibold items-center space-x-2"
              >
                <FaUser />
                <span>Login</span>
              </Link>
            )}

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
