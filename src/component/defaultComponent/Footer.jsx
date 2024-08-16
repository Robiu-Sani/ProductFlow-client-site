import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import playStoreImage from "../../images/playStore.png";
import appStoreImage from "../../images/appstore.png";
import icon from "../../images/icon.png";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Name */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={icon} // replace with your logo path
              alt="ProductFlow Logo"
              className="h-14 w-14 mb-2 rounded-full"
            />
            <h1 className="text-2xl font-bold">ProductFlow</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <a
              href="/about"
              className="hover:text-gray-300 transition duration-200"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="hover:text-gray-300 transition duration-200"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:text-gray-300 transition duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-gray-300 transition duration-200"
            >
              Terms of Service
            </a>
          </div>

          {/* App Store and Play Store Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={playStoreImage}
                alt="Google Play Store"
                className="h-12 w-[160px]"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appStoreImage}
                alt="Apple  App Store"
                className="h-12 w-[160px]"
              />
            </a>
          </div>
        </div>

        {/* Social Media Icons and Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-200 pt-6">
          {/* Social Media Icons */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-gray-300 transition duration-200" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-gray-300  transition duration-200" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-gray-300 transition duration-200" />
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="text-center text-gray-100 mt-4 md:mt-0">
            <p>&copy; 2024 ProductFlow. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
