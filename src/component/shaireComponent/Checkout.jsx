import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSource from "../customComponent/useAxiosSorce";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const { axiosSource } = useAxiosSource();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    axiosSource
      .get(`/checkout/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: err.response?.data?.message || err.message,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#d33",
        }).then(() => {
          navigate("/");
        });
      });
  }, [axiosSource, id, navigate]);

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  const {
    productName,
    productImage,
    description,
    price,
    category,
    brand,
    ratings,
    productCreationDateTime,
  } = item;

  const deliveryFee = 10;
  const totalPrice = price + deliveryFee;

  const onSubmit = (formData) => {
    console.log(formData);
    const orderData = {
      email: formData.orderEmail,
      address: formData.address,
      mobileNumber: formData.mobileNumber,
      userName: formData.userName,
      paymentMethod: formData.paymentMethod,
      productName,
      productImage,
      description,
      price,
      category,
      brand,
      ratings,
      productCreationDateTime,
      totalPrice,
    };

    console.log("Order Data:", orderData);

    Swal.fire({
      title: "Order Placed",
      text: `Your order for ${productName} has been placed.`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#3085d6",
      timer: 2000,
    }).then(() => {
      reset(); // Reset form fields if needed
    });
  };

  return (
    <div className="container mt-[100px] mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            className="w-full object-cover rounded-lg"
            src={productImage}
            alt={productName}
          />
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-2">
            ${price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-600 mb-1">Category: {category}</p>
          <p className="text-sm text-gray-600 mb-1">Brand: {brand}</p>
          <p className="text-sm text-gray-600 mb-1">Ratings: {ratings} / 5</p>
          <p className="text-sm text-gray-600 mb-4">
            Added on: {new Date(productCreationDateTime).toLocaleDateString()}
          </p>
          <p className="font-semibold text-gray-800 mb-4">
            Total Cost: ${price.toFixed(2)} + Delivery Fee: ${deliveryFee} = $
            {totalPrice.toFixed(2)}
          </p>
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {productName}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Name:</label>
                <input
                  type="text"
                  {...register("userName", { required: "Name is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your name"
                />
                {errors.userName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.userName.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Email:</label>
                <input
                  type="email"
                  {...register("orderEmail", { required: "Email is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                />
                {errors.orderEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.orderEmail.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Mobile Number:
                </label>
                <input
                  type="tel"
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your mobile number"
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Payment Method:
                </label>
                <select
                  {...register("paymentMethod")}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="cash">Cash on Delivery</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              <div className="mb-6 col-span-1 sm:col-span-2">
                <label className="block text-gray-700 mb-2">Address:</label>
                <textarea
                  {...register("address", { required: "Address is required" })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows="4"
                  placeholder="Enter your address"
                ></textarea>
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-[50px] bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Order Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
