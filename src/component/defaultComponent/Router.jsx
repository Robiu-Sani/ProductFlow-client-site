import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../landingPages/HomeRoot";
import Error from "./Error";
import Home from "../landingPages/home/Home";
import Products from "../landingPages/Products/Products";
import About from "../landingPages/about/About";
import Contact from "../landingPages/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
