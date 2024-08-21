import useAllAddCards from "../../customComponent/useAllAddCards";
import AddCardProductsCard from "../../shaireComponent/AddCardProductsCard";
import { useState, useEffect } from "react";

const AllAddToCards = () => {
  const { AddCard, isLoading } = useAllAddCards(); // Assume isLoading is provided by the custom hook
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading]);

  return (
    <div className="w-full bg-gray-100">
      {loading ? (
        <div className="w-full h-[500px] flex justify-center items-center">
          <div className="text-center">
            <span className="loading loading-spinner loading-lg"></span>
            <h1 className="text-xl font-semibold mt-4">Loading...</h1>
          </div>
        </div>
      ) : AddCard.length === 0 ? (
        <div className="w-full h-[500px] flex justify-center items-center">
          <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
            You Don’t Have Any Products
          </h1>
        </div>
      ) : (
        <div className="px-2 container mx-auto mt-[65px] py-10">
          <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
            All Added Products
          </h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {AddCard.map((item) => (
              <AddCardProductsCard key={item._id} items={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllAddToCards;
