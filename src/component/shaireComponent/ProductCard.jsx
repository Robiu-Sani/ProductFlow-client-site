import Swal from "sweetalert2";

export default function ProductCard({ item }) {
  // Function to handle "Add to Cart" button click
  const handleAddToCart = () => {
    Swal.fire({
      title: "Added to Cart",
      text: `${item.productName} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#3085d6",
      timer: 2000,
    });
  };

  // Function to handle "Buy Now" button click
  const handleBuyNow = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: `Do you want to proceed to checkout for ${item.productName}?`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Proceed",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the checkout process here
        Swal.fire({
          title: "Checkout",
          text: "Redirecting to the checkout page...",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#3085d6",
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="bg-white relative !z-0 pb-7 w-full shadow-md rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="h-[160px] border-b flex justify-center items-center">
        <img
          src={item.productImage}
          alt={item.productName}
          className="h-full object-cover" // Reduced height
        />
      </div>

      <div className="p-2">
        {/* Product Name */}
        <h2 className="text-[16px] font-semibold mb-1">{item.productName}</h2>

        {/* Description */}
        <p className="text-gray-700 text-[12px] mb-2">{item.description}</p>

        <div className="w-full flex justify-between flex-wrap items-center">
          {/* Category */}
          <p className="text-gray-600 text-[12px] mb-1">
            <strong>Category:</strong> {item.category}
          </p>

          {/* Brand Name */}
          <p className="text-gray-600 text-[12px]">
            <strong>Brand:</strong> {item.brand}
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-between items-center">
          {/* Price */}
          <p className="text-gray-600 text-[12px] mb-1">
            <strong>Price:</strong> ${item.price}
          </p>

          {/* Rating */}
          <div className="flex justify-center gap-2 items-center">
            <strong className="text-[12px]">Rating:</strong>
            <div className="flex items-center mb-1">
              {[...Array(Math.floor(item.ratings))].map((_, i) => (
                <span key={i} className="text-yellow-500 text-[12px]">
                  ★
                </span>
              ))}
              {[...Array(5 - Math.floor(item.ratings))].map((_, i) => (
                <span key={i} className="text-gray-400 text-[12px]">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Creation Date */}
        <p className="text-gray-500 text-xs">
          Created on: {new Date(item.productCreationDateTime).toLocaleString()}
        </p>

        {/* Buttons */}
        <div className="w-[calc(100%-16px)] grid grid-cols-2 items-end gap-2 absolute bottom-2">
          <button
            className="bg-blue-500 text-white text-[12px] px-3 py-1 rounded-lg hover:bg-blue-600 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="bg-green-500 text-white text-[12px] px-3 py-1 rounded-lg hover:bg-green-600 transition"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
