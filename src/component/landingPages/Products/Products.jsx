// import { IoIosRefresh } from "react-icons/io";
import banner from "../../../images/banner.jpg";
import useProducts from "../../customComponent/useProducts";
import ProductCard from "../../shaireComponent/ProductCard";
import DropdownsComponents from "./DropdownsComponents";
import FiltersComponents from "./FiltersComponents";
import Reset from "./Reset";
import SearchComponent from "./SearchComponent";

export default function Products() {
  const { products } = useProducts();
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
      <div className="w-full py-6 px-3 bg-red-50">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 container mx-auto">
          <SearchComponent></SearchComponent>
          <FiltersComponents></FiltersComponents>
          <DropdownsComponents></DropdownsComponents>
          <Reset></Reset>
        </div>
      </div>

      <div className="w-full bg-[#9720206c]">
        {/* Product Cards */}
        <div className="grid responsive z-0 container mx-auto py-10 px-2 gap-3">
          {products.map((item, idx) => (
            <ProductCard item={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
