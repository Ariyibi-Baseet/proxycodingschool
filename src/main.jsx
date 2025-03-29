import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES & COMPNENTS
import App from "./App.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";

// CSS FILES
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// JS FILES
import "bootstrap/dist/js/bootstrap.js";

// ROUTER SETUPS
const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoon />,
  },
  {
    path: "/coming-soon",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
