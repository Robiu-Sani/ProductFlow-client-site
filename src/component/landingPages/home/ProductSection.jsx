import { Link } from "react-router-dom";
import ProductCard from "../../shaireComponent/ProductCard";

export default function ProductSection() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 py-10">
      {/* Section Name and Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl text-red-900 font-bold mb-4">Our Products</h1>
        <p className="text-lg text-gray-600">
          Explore our wide range of products
        </p>
      </div>

      {/* Product Cards */}
      <div
        className="grid gap-6 mb-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      {/* See All Products Button */}
      <div className="text-center">
        <Link
          to="/products"
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          See All Products
        </Link>
      </div>
    </section>
  );
}
