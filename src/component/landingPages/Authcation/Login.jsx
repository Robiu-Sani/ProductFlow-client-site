import { useForm } from "react-hook-form";
import banner from "../../../images/banner.jpg";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../defaultComponent/Contaxt";

export default function Login() {
  const { loginUserByEmail } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await loginUserByEmail(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "You have successfully logged in.",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message || "An error occurred during login.",
      });
    }
  };

  // Navigate back to the home page
  const goHome = () => {
    navigate("/"); // Adjust the path as needed
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-gray-100 py-10"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-md bg-red-50 p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={goHome}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Back to Home
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Google Login Button */}
        <GoogleAuth />

        {/* Signup Link */}
        <div className="text-center mt-4">
          <p className="text-gray-700">
            Don’t have an account?{" "}
            <a href="/signup" className="text-red-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
