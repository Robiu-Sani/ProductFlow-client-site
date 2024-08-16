import { useForm } from "react-hook-form";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the form data to your server
  };

  return (
    <section className="w-full py-10 bg-red-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Message Us</h1>
          <p className="text-lg text-gray-700">
            We`d love to hear from you! Please reach out with any questions or
            feedback.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Form */}
          <div className="lg:w-2/3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Get in Touch
              </h2>

              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email is not valid",
                    },
                  })}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Subject Field */}
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Contact Details
            </h2>

            <p className="text-lg mb-2">
              <strong className="font-bold">Address:</strong> 123 Main Street,
              City, Country
            </p>

            <p className="text-lg mb-2">
              <strong className="font-bold">Phone:</strong> (123) 456-7890
            </p>

            <p className="text-lg mb-2">
              <strong className="font-bold">Email:</strong>{" "}
              contact@yourwebsite.com
            </p>

            <p className="text-lg mb-2">
              <strong className="font-bold">Office Hours:</strong> Mon-Fri, 9 AM
              - 5 PM
            </p>

            <p className="text-lg mb-2">
              <strong className="font-bold">Social Media:</strong>
              <a
                href="https://facebook.com/yourprofile"
                className="text-red-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              ,
              <a
                href="https://twitter.com/yourprofile"
                className="text-red-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              ,
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-red-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>

            <p className="text-lg mb-2">
              <strong className="font-bold">Support:</strong> For support, email
              us at{" "}
              <a
                href="mailto:support@yourwebsite.com"
                className="text-red-500 hover:underline"
              >
                support@yourwebsite.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
