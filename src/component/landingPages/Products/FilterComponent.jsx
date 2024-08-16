import { useState } from "react";
import {
  FaSearch,
  FaSortAmountDownAlt,
  FaSortAmountUpAlt,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function FilterComponent() {
  const [priceOrder, setPriceOrder] = useState("lowToHigh");
  const [dateOrder, setDateOrder] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const togglePriceOrder = () => {
    setPriceOrder((prev) => (prev === "lowToHigh" ? "highToLow" : "lowToHigh"));
  };

  const toggleDateOrder = () => {
    setDateOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
  };

  const handleReset = () => {
    setPriceOrder("lowToHigh");
    setDateOrder("newest");
    // Add any additional reset functionality here
  };

  const handleBrandDropdown = () => {
    setBrandDropdownOpen(!brandDropdownOpen);
  };

  const handleCategoryDropdown = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };

  return (
    <div className="w-full py-6 bg-red-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Mobile View Toggle */}
        <div className="lg:hidden flex items-center mb-4">
          <button
            className="bg-gray-200 p-2 rounded-full shadow-md"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <FaTimes /> : <FaSearch />}
          </button>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="flex flex-col space-y-4 lg:hidden w-full">
            {/* Search Input Field */}
            <div className="flex items-center bg-white border border-gray-300 p-2 rounded-lg w-full">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full border-none outline-none"
              />
            </div>

            {/* Price Toggle */}
            <div
              className="flex items-center cursor-pointer hover:text-red-500 transition-colors"
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

            {/* Brand Dropdown */}
            <div className="w-full py-6 bg-red-50">
              <div className="container mx-auto px-4">
                {/* Grid Container */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
                  {/* Category Dropdown */}
                  <div className="relative w-full">
                    <button
                      className="flex items-center bg-white border border-gray-300 p-2 rounded-lg w-full text-left shadow-md hover:bg-gray-100"
                      onClick={handleCategoryDropdown}
                    >
                      <span className="flex-grow">Category Name</span>
                      <IoIosArrowDown
                        className={`ml-2 transition-transform ${
                          categoryDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {categoryDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10">
                        <ul>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">
                            Category 1
                          </li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">
                            Category 2
                          </li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">
                            Category 3
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  {/* Brand Dropdown */}
                  <div className="relative w-full">
                    <button
                      className="flex items-center bg-white border border-gray-300 p-2 rounded-lg w-full text-left shadow-md hover:bg-gray-100"
                      onClick={handleBrandDropdown}
                    >
                      <span className="flex-grow">Brand Name</span>
                      <IoIosArrowDown
                        className={`ml-2 transition-transform ${
                          brandDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {brandDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10">
                        <ul>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">
                            Brand 1
                          </li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">
                            Brand 2
                          </li>
                          <li className="p-2 hover:bg-gray-100 cursor-pointer">
                            Brand 3
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <button
              className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors"
              onClick={handleReset}
            >
              <FaTimes className="mr-2" />
              Reset
            </button>
          </div>
        )}

        {/* Desktop View */}
        <div className="hidden lg:flex flex-col lg:flex-row lg:space-x-4 w-full lg:w-auto">
          {/* Search Input Field */}
          <div className="flex items-center bg-white border border-gray-300 p-2 rounded-lg w-full lg:w-80 shadow-md mb-4 lg:mb-0">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-none outline-none"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center space-x-4 lg:space-x-6 mb-4 lg:mb-0">
            {/* Price Toggle */}
            <div
              className="flex items-center cursor-pointer hover:text-red-500 transition-colors"
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

          {/* Dropdowns */}
          <div className="grid relative grid-cols-2 gap-4 w-full lg:w-auto">
            {/* Category Dropdown */}
            <div className=" w-full lg:w-40">
              <button
                className="flex items-center bg-white border border-gray-300 p-2 rounded-lg w-full text-left shadow-md hover:bg-gray-100"
                onClick={handleCategoryDropdown}
              >
                <span className="flex-grow">Category Name</span>
                <IoIosArrowDown
                  className={`ml-2 transition-transform ${
                    categoryDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {categoryDropdownOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md">
                  <ul>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Category 1
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Category 2
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Category 3
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Brand Dropdown */}
            <div className=" !z-[1000] w-full lg:w-40">
              <button
                className="flex items-center bg-white border border-gray-300 p-2 rounded-lg w-full text-left shadow-md hover:bg-gray-100"
                onClick={handleBrandDropdown}
              >
                <span className="flex-grow">Brand Name</span>
                <IoIosArrowDown
                  className={`ml-2 transition-transform ${
                    brandDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {brandDropdownOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md">
                  <ul>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Brand 1
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Brand 2
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Brand 3
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Reset Button */}
          <button
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors ml-auto"
            onClick={handleReset}
          >
            <FaTimes className="mr-2" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
