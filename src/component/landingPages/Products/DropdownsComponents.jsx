import { useState } from "react";
import useProducts from "../../customComponent/useProducts";
import { IoIosArrowDown } from "react-icons/io";

export default function DropdownsComponents({
  SaperateFunction,
  showProducts,
}) {
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [brandSearch, setBrandSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { products } = useProducts();

  const handleBrandDropdown = () => {
    setBrandDropdownOpen(!brandDropdownOpen);
  };

  const handleCategoryDropdown = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };

  const handleBrandSearch = (event) => {
    setBrandSearch(event.target.value);
  };

  const handleCategorySearch = (event) => {
    setCategorySearch(event.target.value);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    SaperateFunction(showProducts.filter((item) => item.brand === brand));
    setBrandDropdownOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    SaperateFunction(showProducts.filter((item) => item.category === category));
    setCategoryDropdownOpen(false);
  };

  const filteredBrands = Array.from(
    new Set(products.map((p) => p.brand))
  ).filter((brand) => brand.toLowerCase().includes(brandSearch.toLowerCase()));

  const filteredCategories = Array.from(
    new Set(products.map((p) => p.category))
  ).filter((category) =>
    category.toLowerCase().includes(categorySearch.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 gap-4 w-full justify-center items-center max-w-lg">
      {/* Category Dropdown */}
      <div className="relative w-full">
        <button
          className="flex items-center bg-white border border-gray-300 p-2 rounded-lg w-full text-left shadow-md hover:bg-gray-100"
          onClick={handleCategoryDropdown}
        >
          <span className="flex-grow">
            {selectedCategory || "Category Name"}
          </span>
          <IoIosArrowDown
            className={`ml-2 transition-transform ${
              categoryDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {categoryDropdownOpen && (
          <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md z-20">
            <ul>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                <input
                  type="search"
                  value={categorySearch}
                  onChange={handleCategorySearch}
                  className="w-full h-full border-0 outline-0"
                  placeholder="Search"
                />
              </li>
              {filteredCategories.map((category, idx) => (
                <li
                  key={idx}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </li>
              ))}
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
          <span className="flex-grow">{selectedBrand || "Brand Name"}</span>
          <IoIosArrowDown
            className={`ml-2 transition-transform ${
              brandDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {brandDropdownOpen && (
          <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md z-20">
            <ul>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                <input
                  type="search"
                  value={brandSearch}
                  onChange={handleBrandSearch}
                  className="w-full h-full border-0 outline-0"
                  placeholder="Search"
                />
              </li>
              {filteredBrands.map((brand, idx) => (
                <li
                  key={idx}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleBrandSelect(brand)}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
