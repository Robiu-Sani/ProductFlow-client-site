import { useEffect, useState } from "react";
import banner from "../../../images/banner.jpg";
import usePasitionProducts from "../../customComponent/usePasitionProducts";
import ProductCard from "../../shaireComponent/ProductCard";
import DropdownsComponents from "./DropdownsComponents";
import FiltersComponents from "./FiltersComponents";
import Reset from "./Reset";
import SearchComponent from "./SearchComponent";
import useAxiosSource from "../../customComponent/useAxiosSorce";

export default function Products() {
  const { axiosSource } = useAxiosSource();
  const [getCurrentPage, setGetCurrentPage] = useState(0);
  const itemOfPAges = 10;
  const [productCount, setProductCount] = useState(0);
  const { PasitionProducts, refetch } = usePasitionProducts({ getCurrentPage });
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    axiosSource
      .get("/productslength") // Assuming you have an endpoint to get the total product count
      .then((response) => setProductCount(response.data.count))
      .catch((err) => console.error(err));
    refetch(); // Refetch products whenever the page changes
    setShowProducts(PasitionProducts);
  }, [axiosSource, getCurrentPage, PasitionProducts]);

  const SaperateFunction = (data) => {
    setShowProducts(data);
  };

  const numberOfPages = Math.ceil(productCount / itemOfPAges);
  const pages = [...Array(numberOfPages).keys()];

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

      {/* Filters and Controls */}
      <div className="w-full py-6 px-3 bg-red-50">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 container mx-auto">
          <SearchComponent />
          <FiltersComponents
            SaperateFunction={SaperateFunction}
            getCurrentPage={getCurrentPage}
          />
          <DropdownsComponents
            SaperateFunction={SaperateFunction}
            showProducts={PasitionProducts}
          />
          <Reset
            SaperateFunction={SaperateFunction}
            showProducts={PasitionProducts}
          />
        </div>
      </div>

      {/* Product Cards */}
      <div className="w-full bg-[#9720206c]">
        <div className="grid responsive z-0 container mx-auto py-10 px-2 gap-3">
          {showProducts.map((item, idx) => (
            <ProductCard item={item} key={idx} />
          ))}
          {/* Placeholder divs to maintain grid layout */}
          <div className="w-full"></div>
          <div className="w-full"></div>
          <div className="w-full"></div>
          <div className="w-full"></div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="w-full py-6 px-3 bg-red-50">
        <div className="w-full flex justify-center items-center">
          <div className="join">
            <button
              onClick={() => setGetCurrentPage((prev) => Math.max(prev - 1, 0))}
              className="join-item btn flex justify-center items-center"
            >
              « <span className="text-[11px]">Previous</span>
            </button>
            {pages.map((page) => (
              <button
                key={page}
                className={`join-item btn ${
                  getCurrentPage === page ? "bg-blue-500" : ""
                }`}
                onClick={() => setGetCurrentPage(page)}
              >
                {page + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setGetCurrentPage((prev) =>
                  Math.min(prev + 1, numberOfPages - 1)
                )
              }
              className="join-item btn flex justify-center items-center"
            >
              <span className="text-[11px]">Next</span> »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
