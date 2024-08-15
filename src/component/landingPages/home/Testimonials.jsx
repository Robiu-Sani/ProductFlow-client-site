import person1 from "../../../images/p1.jpeg";
import person2 from "../../../images/p2.jpg";
import person3 from "../../../images/p3.jpeg";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      feedback:
        "ProductFlow has exceeded my expectations! The quality of the products is unmatched, and the customer service is fantastic.",
      image: person1,
    },
    {
      id: 2,
      name: "Michael Brown",
      feedback:
        "I found exactly what I was looking for. The ordering process was smooth, and the delivery was quick.",
      image: person2,
    },
    {
      id: 3,
      name: "Sophia Davis",
      feedback:
        "Great experience! The products are top-notch, and I appreciate the attention to detail in packaging and delivery.",
      image: person3,
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        What Our Customers Say
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900">
              {testimonial.name}
            </h3>
            <p className="mt-4 text-gray-600">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
