import banner from "../../../images/banner.jpg";
import ProductCard from "../../shaireComponent/ProductCard";
import FilterComponent from "./FilterComponent";

export default function Products() {
  return (
    <div className="w-full">
      <div
        className="w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-6xl mt-[60px] font-bold mb-4">
              Our Products
            </h1>
            <p className="text-lg">Discover our exclusive range of products!</p>
          </div>
        </div>
      </div>

      {/* =========  */}
      <FilterComponent></FilterComponent>

      <div className="w-full bg-[#9720206c]">
        {/* Product Cards */}
        <div className="grid responsive container mx-auto py-10 px-2 gap-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
