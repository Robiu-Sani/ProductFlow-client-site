import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../defaultComponent/Contaxt";

export default function Logout() {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut(); // Call the logout function from context
      Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You have successfully logged out.",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/"); // Navigate to home page or login page after logout
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: error.message || "An error occurred during logout.",
      });
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 w-full py-2 rounded-lg hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
}
