import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./component/defaultComponent/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Context from "./component/defaultComponent/Contaxt";
// import Context from "./component/defaultComponent/Contaxt";

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Context> */}
    <QueryClientProvider client={queryClient}>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </QueryClientProvider>
    {/* </Context> */}
  </StrictMode>
);
