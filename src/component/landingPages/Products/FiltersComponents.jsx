import { useState } from "react";
import {
  FaCalendarAlt,
  FaSortAmountDownAlt,
  FaSortAmountUpAlt,
} from "react-icons/fa";
import useAxiosSource from "../../customComponent/useAxiosSorce";

export default function FiltersComponents({
  SaperateFunction,
  getCurrentPage,
}) {
  const [priceOrder, setPriceOrder] = useState("lowToHigh");
  const [dateOrder, setDateOrder] = useState("newest");
  const { axiosSource } = useAxiosSource();

  const togglePriceOrder = () => {
    const newOrder = priceOrder === "lowToHigh" ? "highToLow" : "lowToHigh";
    setPriceOrder(newOrder);

    const endpoint =
      newOrder === "lowToHigh"
        ? "/pasitionProductsByFromLowPrice"
        : "/pasitionProductsByFromHighPrice";

    axiosSource
      .get(`${endpoint}?page=${getCurrentPage}&size=${10}`)
      .then((response) => SaperateFunction(response.data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  const toggleDateOrder = () => {
    const newDateOrder = dateOrder === "newest" ? "oldest" : "newest";
    setDateOrder(newDateOrder);

    const endpoint =
      newDateOrder === "newest"
        ? "/pasitionProductsbynewtoOld"
        : "/pasitionProductsbyoldToNew";

    axiosSource
      .get(`${endpoint}?page=${getCurrentPage}&size=${10}`)
      .then((response) => SaperateFunction(response.data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  return (
    <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 w-full max-w-lg">
      {/* Price Toggle */}
      <div
        className="flex items-center mt-3 cursor-pointer hover:text-red-500 transition-colors"
        onClick={togglePriceOrder}
      >
        {priceOrder === "lowToHigh" ? (
          <FaSortAmountUpAlt className="text-gray-500 mr-2" />
        ) : (
          <FaSortAmountDownAlt className="text-gray-500 mr-2" />
        )}
        <span>
          {priceOrder === "lowToHigh"
            ? "Price: Low to High"
            : "Price: High to Low"}
        </span>
      </div>

      {/* Date Added Toggle */}
      <div
        className="flex items-center cursor-pointer hover:text-red-500 transition-colors"
        onClick={toggleDateOrder}
      >
        <FaCalendarAlt className="text-gray-500 mr-2" />
        <span>
          {dateOrder === "newest"
            ? "Date Added: Newest First"
            : "Date Added: Oldest First"}
        </span>
      </div>
    </div>
  );
}
