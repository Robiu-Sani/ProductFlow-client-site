import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialContact() {
  return (
    <section className="w-full py-12 bg-red-100">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-red-600 mb-3">Follow Us</h1>
          <p className="text-lg text-gray-700">
            Stay connected with us on social media for updates and news.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-600 hover:text-red-700 transition"
          >
            <FaFacebook size={32} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-600 hover:text-red-700 transition"
          >
            <FaTwitter size={32} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-600 hover:text-red-700 transition"
          >
            <FaInstagram size={32} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-600 hover:text-red-700 transition"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
