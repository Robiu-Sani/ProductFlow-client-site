import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInformation() {
  return (
    <section className="w-full py-12 bg-red-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-red-600 mb-3">Contact Us</h1>
          <p className="text-lg text-gray-700">
            Get in touch with us for any inquiries or support. We are here to
            help!
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <div className="mr-4 text-red-600">
              <FaMapMarkerAlt size={32} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Our Address
              </h2>
              <p className="text-gray-600">123 Main Street, City, Country</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <div className="mr-4 text-red-600">
              <FaPhone size={32} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">Call Us</h2>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <div className="mr-4 text-red-600">
              <FaEnvelope size={32} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">Email Us</h2>
              <p className="text-gray-600">contact@yourwebsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
