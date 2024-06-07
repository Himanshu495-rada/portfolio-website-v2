import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.tsx";
import AboutPage from "./pages/About/AboutPage.tsx";
import ExperiencePage from "./pages/Experience/ExperiencePage.tsx";
import ContactPage from "./pages/Contact/ContactPage.tsx";
import ProjectsPage from "./pages/Projects/ProjectsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/experience",
    element: <ExperiencePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
