import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useProducts from "../../customComponent/useProducts";
import useAxiosSource from "../../customComponent/useAxiosSorce";

export default function SearchComponent({ SaperateFunction }) {
  const { products } = useProducts();
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { axiosSource } = useAxiosSource();

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleProductClick = (productName) => {
    console.log(productName);
    setSearchInput(""); // Clear search input after selection
    setFilteredProducts([]); // Clear the filtered list
    axiosSource
      .get(`/products/${productName}`)
      .then((result) => SaperateFunction(result.data))
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  };

  return (
    <div className="flex items-center mt-5 relative w-full max-w-lg mb-4">
      <div className="w-full flex justify-center bg-white border border-gray-300 p-2 rounded-lg items-center gap-2">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full border-none outline-none"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      {filteredProducts.length > 0 && (
        <div className="w-full p-3 absolute top-[50px] rounded-md flex flex-col z-50 bg-white border">
          <ul>
            {filteredProducts.map((product, idx) => (
              <li
                key={idx}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleProductClick(product.productName)}
              >
                {product.productName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
