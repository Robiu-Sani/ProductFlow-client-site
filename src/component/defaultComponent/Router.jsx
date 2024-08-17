import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../landingPages/HomeRoot";
import Error from "./Error";
import Home from "../landingPages/home/Home";
import Products from "../landingPages/Products/Products";
import About from "../landingPages/about/About";
import Contact from "../landingPages/contact/Contact";
import Login from "../landingPages/Authcation/Login";
import Signup from "../landingPages/Authcation/Signup";
import EditProfile from "../landingPages/Authcation/EditProfile";
import Private from "./Private";

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
        element: (
          <Private>
            <Products></Products>
          </Private>
        ),
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
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/edit-profile",
    element: (
      <Private>
        <EditProfile></EditProfile>
      </Private>
    ),
  },
]);
