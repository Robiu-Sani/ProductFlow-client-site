import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "What is ProductFlow?",
    answer:
      "ProductFlow is an e-commerce platform offering a wide range of products from electronics to home goods with a focus on customer satisfaction and fast delivery.",
  },
  {
    id: 2,
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive an email with a tracking number and a link to track your shipment online.",
  },
  {
    id: 3,
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on most products. Please visit our Returns page for more details and to start a return.",
  },
  {
    id: 4,
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@productflow.com or by phone at 1-800-123-4567.",
  },
];

export default function FAQSection() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="flex items-center justify-between p-5 cursor-pointer border-b border-gray-200 hover:bg-gray-100 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <div className="text-gray-600">
                <FaChevronDown className="inline-block" />
              </div>
            </div>
            <div className="p-5 bg-gray-100">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
