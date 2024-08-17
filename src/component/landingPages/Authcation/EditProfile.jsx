import { useForm } from "react-hook-form";
import banner from "../../../images/banner.jpg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../defaultComponent/Contaxt";

export default function EditProfile() {
  const { updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = async (data) => {
    const { displayName, photoURL } = data;
    try {
      await updateUserProfile(displayName, photoURL);
      Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        text: "Your profile has been successfully updated.",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/"); // Navigate to home page or any other page after successful update
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message || "An error occurred during profile update.",
      });
    }
  };

  // Navigate back to the previous page
  const goBack = () => {
    navigate(-1); // Go back to the previous page
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
            onClick={goBack}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Back
          </button>
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Edit Profile
          </h2>
        </div>

        {/* Edit Profile Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Display Name Field */}
          <div>
            <label
              htmlFor="displayName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              {...register("displayName", {
                required: "Display Name is required",
              })}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
            {errors.displayName && (
              <p className="text-red-500 text-sm">
                {errors.displayName.message}
              </p>
            )}
          </div>

          {/* Photo URL Field */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              {...register("photoURL")}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </section>
  );
}
