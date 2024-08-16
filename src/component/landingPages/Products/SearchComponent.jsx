import { FaSearch } from "react-icons/fa";

export default function SearchComponent() {
  return (
    <div className="flex items-center mt-5 bg-white border border-gray-300 p-2 rounded-lg w-full max-w-lg mb-4">
      <FaSearch className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full border-none outline-none"
      />
    </div>
  );
}
