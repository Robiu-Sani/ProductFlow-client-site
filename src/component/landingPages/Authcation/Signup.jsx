import { useForm } from "react-hook-form";
import banner from "../../../images/banner.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import GoogleAuth from "./GoogleAuth";
import { AuthContext } from "../../defaultComponent/Contaxt";
// import { AuthContext } from "../../defaultComponent/Context";

export default function Signup() {
  const { createUserByEmail } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await createUserByEmail(email, password);
      Swal.fire({
        icon: "success",
        title: "Sign Up Successful!",
        text: "You have successfully signed up.",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/"); // Navigate to login page after successful signup
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Sign Up Failed",
        text: error.message || "An error occurred during sign up.",
      });
    }
  };

  // Navigate to the login page
  const goToLogin = () => {
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
            onClick={goToLogin}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Back to Home
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Sign Up
          </h2>
        </div>

        {/* Signup Form */}
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

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-600">OR</div>

        {/* Google Login Button */}
        <GoogleAuth />

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-gray-700">
            Already have an account?{" "}
            <Link href="/login" className="text-red-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
