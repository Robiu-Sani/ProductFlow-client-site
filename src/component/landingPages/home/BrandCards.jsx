import banner1 from "../../../images/brand1.png";
import banner2 from "../../../images/brand2.jpg";
import banner3 from "../../../images/brand3.jpg";
import banner4 from "../../../images/brand4.avif";

export default function BrandCards() {
  const brands = [
    {
      id: 1,
      name: "Brand One",
      description: "Innovative solutions for modern needs.",
      image: banner1,
    },
    {
      id: 2,
      name: "Brand Two",
      description: "Quality and reliability you can trust.",
      image: banner4,
    },
    {
      id: 3,
      name: "Brand Three",
      description: "Designing the future, today.",
      image: banner2,
    },
    {
      id: 4,
      name: "Brand Four",
      description: "Excellence in every product we create.",
      image: banner3,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Our Featured Brands
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900">{brand.name}</h3>
              <p className="mt-2 text-gray-600">{brand.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
