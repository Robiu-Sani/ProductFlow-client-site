import { FaShoppingCart, FaHistory, FaUsers } from "react-icons/fa";

export default function OurStory() {
  return (
    <section className="py-10 w-full bg-[#9720206c]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
        <p className="text-lg text-white mb-6">
          At ProductFlow, our journey began in 2020 with a bold vision to
          revolutionize the e-commerce landscape. What started as a small
          startup with a handful of dedicated individuals quickly evolved into a
          dynamic platform, driven by our passion for innovation and excellence.
        </p>
        <p className="text-lg text-white mb-6">
          Our mission is simple: to provide an unparalleled shopping experience
          that combines convenience, variety, and top-notch customer service. We
          are committed to offering a diverse range of products, ensuring
          quality and affordability, and continuously enhancing our platform to
          meet the ever-changing needs of our customers.
        </p>
        <p className="text-lg text-white mb-6">
          Over the years, we've built a strong community of loyal customers and
          partners, all while staying true to our core values of integrity,
          innovation, and customer satisfaction. Our growth is a testament to
          the trust and support we've received from our valued users.
        </p>
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="flex items-center text-white">
            <FaShoppingCart className="text-3xl mr-2" />
            <span className="text-lg">Over 5000 Products</span>
          </div>
          <div className="flex items-center text-white">
            <FaHistory className="text-3xl mr-2" />
            <span className="text-lg">3+ Years of Experience</span>
          </div>
          <div className="flex items-center text-white">
            <FaUsers className="text-3xl mr-2" />
            <span className="text-lg">100,000+ Satisfied Customers</span>
          </div>
        </div>
        <p className="text-lg text-white">
          As we look towards the future, we remain dedicated to our mission and
          excited about the opportunities that lie ahead. Thank you for being a
          part of our journey. Together, we will continue to shape the future of
          e-commerce.
        </p>
      </div>
    </section>
  );
}
