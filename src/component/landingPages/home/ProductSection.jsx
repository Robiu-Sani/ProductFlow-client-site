import ProductCard from "../../shaireComponent/ProductCard";
import useProducts from "../../customComponent/useProducts";

export default function ProductSection() {
  const { products, refetch } = useProducts(); // Using the custom hook to get products

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
        {products.slice(0, 3).map((item, idx) => (
          <ProductCard item={item} key={idx} />
        ))}
      </div>

      {/* See All Products Button */}
      <div className="text-center">
        <button
          onClick={refetch}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          See All Products
        </button>
      </div>
    </section>
  );
}
