import { Outlet } from "react-router-dom";
import Navbar from "../defaultComponent/Navbar";
import Footer from "../defaultComponent/Footer";

export default function HomeRoot() {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
