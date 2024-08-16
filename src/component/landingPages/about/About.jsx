import banner from "../../../images/banner.jpg";
import MissionValues from "./MissionValues";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";

export default function About() {
  return (
    <div className="w-full">
      <div
        className="w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-6xl mt-[60px] font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg">Our Journey, Mission, and Values</p>
          </div>
        </div>
      </div>
      <OurStory></OurStory>
      <OurTeam></OurTeam>
      <MissionValues></MissionValues>
    </div>
  );
}
