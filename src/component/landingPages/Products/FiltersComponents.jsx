import { useState } from "react";
import {
  FaCalendarAlt,
  FaSortAmountDownAlt,
  FaSortAmountUpAlt,
} from "react-icons/fa";

export default function FiltersComponents() {
  const [priceOrder, setPriceOrder] = useState("lowToHigh");
  const [dateOrder, setDateOrder] = useState("newest");

  const togglePriceOrder = () => {
    setPriceOrder((prev) => (prev === "lowToHigh" ? "highToLow" : "lowToHigh"));
  };

  const toggleDateOrder = () => {
    setDateOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
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
