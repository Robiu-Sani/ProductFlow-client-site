import banner from "../../../images/banner.jpg";
import ContactInformation from "./ContactInformation";
import ContactPage from "./ContactPage";
import SocialContact from "./SocialContact";

export default function Contact() {
  return (
    <div className="w-full">
      <div
        className="w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-6xl mt-[60px] font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg">
              Get in touch with us for any inquiries or support
            </p>
          </div>
        </div>
      </div>
      <ContactInformation></ContactInformation>
      <ContactPage></ContactPage>
      <SocialContact></SocialContact>
    </div>
  );
}
