import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSource from "../../customComponent/useAxiosSorce";
import { AuthContext } from "../../defaultComponent/Contaxt";

const ProductDetails = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { axiosSource } = useAxiosSource();
  const { loggedUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSource
      .get(`/ProductsDetails/${id}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#d33",
        });
      });
  }, [axiosSource, id]);

  const handleAddToCart = async () => {
    if (loggedUser) {
      const data = {
        productSign: item._id,
        email: loggedUser.email,
        productName: item.productName,
        productImage: item.productImage,
        description: item.description,
        price: item.price,
        category: item.category,
        brand: item.brand,
        ratings: item.ratings,
        productCreationDateTime: item.productCreationDateTime,
      };

      try {
        const response = await axiosSource.post("/AddCard", data);

        if (response.status === 201) {
          Swal.fire({
            title: "Added to Cart",
            text: `${item.productName} added to cart successfully.`,
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6",
            timer: 2000,
          });
        } else {
          throw new Error("Unexpected response status.");
        }
      } catch (error) {
        console.error("Error adding item to cart:", error);

        if (error.response && error.response.status === 400) {
          Swal.fire({
            title: "Already in Cart",
            text: "This product is already in your cart.",
            icon: "warning",
            confirmButtonText: "OK",
            confirmButtonColor: "#f0ad4e",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "There was an issue adding the item to your cart. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#d33",
          });
        }
      }
    } else {
      navigate("/login");
    }
  };

  const handleByeProducts = () => {
    navigate(`/checkout/${id}`);
  };

  if (loading || !item) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white mt-[80px] shadow-lg rounded-lg overflow-hidden mb-8 p-3 transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col md:flex-row">
        <img
          className="h-64 w-full md:w-1/2 object-cover object-center"
          src={item.productImage}
          alt={item.productName}
        />
        <div className="p-6 md:w-1/2">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            {item.productName}
          </h2>
          <p className="text-gray-700 mb-6">{item.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            ${item.price}
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Category: {item.category}
          </p>
          <p className="text-sm text-gray-500 mb-2">Brand: {item.brand}</p>
          <p className="text-sm text-gray-500 mb-4">
            Ratings: {item.ratings} / 5
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <button
              onClick={handleByeProducts}
              className="bg-red-700 text-white px-6 py-2 mb-4 md:mb-0 md:mr-2 rounded-lg hover:bg-red-800 transition"
            >
              Buy
            </button>
            <button
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
