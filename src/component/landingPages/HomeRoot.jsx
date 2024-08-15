import { Outlet } from "react-router-dom";
import Navbar from "../defaultComponent/Navbar";

export default function HomeRoot() {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
