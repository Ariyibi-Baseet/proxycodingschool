import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
import App from "./App.jsx";
import ApplicationPage from "./pages/ApplicationPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ApplicationPopup from "./components/ApplicationPopup.jsx";

// CSS FILES
import "./assets/css/variables.css";
import "bootstrap/dist/css/bootstrap.css";

// JS FILES
import "bootstrap/dist/js/bootstrap.js";

// ROUTER SETUPS
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/coming-soon",
    element: <ComingSoon />,
  },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
  {
    path: "/apply",
    element: <ApplicationPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
  {
    path: "/popup",
    element: <ApplicationPopup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
