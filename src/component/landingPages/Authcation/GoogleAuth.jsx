import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../defaultComponent/Contaxt";
import { useNavigate } from "react-router-dom";

export default function GoogleAuth() {
  const { loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    loginWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: `Welcome ${result.user.displayName}!`,
          text: "You have successfully logged in.",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong with Google login!",
        });
        console.error("Error logging in with Google:", error);
      });
  };

  return (
    <div className="flex items-center w-full justify-center my-4">
      <button
        onClick={handleGoogleAuth}
        className="flex items-center w-full justify-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        <FaGoogle className="mr-2" />
        Login with Google
      </button>
    </div>
  );
}
