import Banner from "./Banner";
import BrandCards from "./BrandCards";
import FAQSection from "./FAQSection";
import ProductSection from "./ProductSection";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div className="w-full ">
      <Banner></Banner>
      <ProductSection></ProductSection>
      <BrandCards></BrandCards>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
    </div>
  );
}
