import productImage from "../../images/product-1-1.jpg"; // Import the image correctly

export default function ProductCard() {
  // Example product data
  const product = {
    productName: "Awesome Product",
    productImage: productImage, // Use the imported image
    description: "This is a great product that you will love!",
    price: 99.99,
    category: "Electronics",
    ratings: 4,
    creationDate: "2024-08-16T12:00:00Z",
    brandName: "CoolBrand",
  };

  return (
    <div className="bg-white w-full shadow-md rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="h-[160px] border-b flex justify-center items-center">
        <img
          src={product.productImage}
          alt={product.productName}
          className=" h-full object-cover" // Reduced height
        />
      </div>

      <div className="p-2">
        {/* Product Name */}
        <h2 className="text-[16px] font-semibold mb-1">
          {product.productName}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-[12px] mb-2">{product.description}</p>

        <div className="w-full flex justify-between flex-wrap items-center">
          {/* Category */}
          <p className="text-gray-600 text-[12px] mb-1">
            <strong>Category:</strong> {product.category}
          </p>

          {/* Brand Name */}
          <p className="text-gray-600 text-[12px] ">
            <strong>Brand:</strong> {product.brandName}
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-between items-center">
          {/* Category */}
          <p className="text-gray-600 text-[12px] mb-1">
            <strong>Price:</strong> ${product.price}
          </p>

          {/* Rating Name */}
          <div className="flex justify-center gap-2 items-center ">
            <strong className="text-[12px]">Rating:</strong> {/* Ratings */}
            <div className="flex items-center mb-1">
              {[...Array(product.ratings)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-[12px]">
                  ★
                </span>
              ))}
              {[...Array(5 - product.ratings)].map((_, i) => (
                <span key={i} className="text-gray-400 text-[12px]">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Creation Date */}
        <p className="text-gray-500 text-xs">
          Created on: {new Date(product.creationDate).toLocaleString()}
        </p>

        {/* Buttons */}
        {/* <div className="flex gap-2">
          <button className="bg-blue-500 text-white text-[12px] px-3 py-1 rounded-lg hover:bg-blue-600 transition">
            Add to Cart
          </button>
          <button className="bg-green-500 text-white text-[12px] px-3 py-1 rounded-lg hover:bg-green-600 transition">
            Buy Now
          </button>
        </div> */}
      </div>
    </div>
  );
}
