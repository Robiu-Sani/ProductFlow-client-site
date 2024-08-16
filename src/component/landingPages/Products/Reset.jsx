import { FaTimes } from "react-icons/fa";

export default function Reset() {
  return (
    <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors">
      <FaTimes className="mr-2" />
      Reset
    </button>
  );
}
