import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import banner from "../../../images/banner.jpg";

export default function Banner() {
  return (
    <div
      className=" w-full  px-2 min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-red-900 opacity-70"></div>
      <div className="relative z-10 text-center mt-[100px] max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-[65px] font-bold mb-4">
          Welcome to ProductFlow
        </h1>
        <p className="text-lg my-10">
          Discover the best products at unbeatable prices. Join our community to
          get the latest updates!
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="flex items-center bg-white rounded-full px-4 py-2 mb-4 md:mb-0 md:mr-4">
            <FaEnvelope className="text-red-600 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none -py-1 max-w-[250px] sm:w-[300px] focus:outline-none text-black"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-200 shadow-lg"
          >
            Subscribe
          </button>
        </form>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-300 transition duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-300 transition duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-300 transition duration-200"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
