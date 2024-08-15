import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../landingPages/HomeRoot";
import Error from "./Error";
import Home from "../landingPages/home/Home";

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
    ],
  },
]);
