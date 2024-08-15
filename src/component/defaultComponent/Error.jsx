import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Error() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-800"
    >
      <FaExclamationTriangle className="text-red-600 text-7xl mb-6 animate-pulse" />
      <h1 className="text-5xl font-bold mb-4">Error 404</h1>
      <p className="text-xl mb-6 text-center max-w-lg">
        Sorry, the page you are looking for doesn`t exist or has been moved.
        Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-200 shadow-lg"
      >
        Back to Home
      </Link>
      <div className="mt-8">
        <p className="text-gray-700">Need help?</p>
        <Link to="/contact" className="text-red-600 underline">
          Contact Support
        </Link>
      </div>
    </motion.div>
  );
}
