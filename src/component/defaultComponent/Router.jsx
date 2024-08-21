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
import ProductDetails from "../landingPages/ManagesComponent/ProductDetails";
import AllAddToCards from "../landingPages/ManagesComponent/AllAddToCards";
import Checkout from "../shaireComponent/Checkout";

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
        path: "/addCard",
        element: (
          <Private>
            <AllAddToCards></AllAddToCards>
          </Private>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <Private>
            <Checkout></Checkout>
          </Private>
        ),
      },
      {
        path: "/productsDetails/:id",
        element: (
          <Private>
            <ProductDetails></ProductDetails>
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
