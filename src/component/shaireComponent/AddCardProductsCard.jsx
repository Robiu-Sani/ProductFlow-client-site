import { useNavigate } from "react-router-dom";

const AddCardProductsCard = ({ items }) => {
  const {
    productName,
    productImage,
    price,
    category,
    brand,
    ratings,
    productCreationDateTime,
    email,
    _id,
  } = items;
  const navigate = useNavigate();

  const handleByeProducts = (id) => {
    navigate(`/checkout/${id}`);
  };

  return (
    <div className="grid gap-2 grid-cols-3 p-3 bg-white w-full shadow-lg rounded-lg overflow-hidden mb-4 max-w-3xl mx-auto">
      <img
        className="w-full object-cover "
        src={productImage}
        alt={productName}
      />
      <div className="w-full flex flex-col col-span-2 justify-between">
        <h2 className="text-2xl font-bold text-red-700">{productName}</h2>
        <p className="text-xl font-semibold text-gray-900">${price}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <p className="text-sm text-gray-500">Brand: {brand}</p>
        <p className="text-sm text-gray-500">Ratings: {ratings} / 5</p>
        <p className="text-sm text-gray-500">
          Added on: {new Date(productCreationDateTime).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-500 mb-2">Email: {email}</p>
        <button
          onClick={() => handleByeProducts(_id)}
          className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition mt-4"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default AddCardProductsCard;
