import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.tsx";
import AboutPage from "./pages/About/AboutPage.tsx";
import ExperiencePage from "./pages/Experience/ExperiencePage.tsx";
import ContactPage from "./pages/Contact/ContactPage.tsx";
import ProjectsPage from "./pages/Projects/ProjectsPage.tsx";
import NavBar from "./Components/NavBar/NavBar.tsx";
import Project8Page from "./pages/Projects/Project8/Project8Page.tsx";
import Project7Page from "./pages/Projects/Project7/Project7Page.tsx";
import Project6Page from "./pages/Projects/Project6/Project6Page.tsx";
import Project5Page from "./pages/Projects/Project5/Project5Page.tsx";
import Project4Page from "./pages/Projects/Project4/Project4Page.tsx";
import Project3Page from "./pages/Projects/Project3/Project3Page.tsx";
import Project2Page from "./pages/Projects/Project2/Project2Page.tsx";
import Project1Page from "./pages/Projects/Project1/Project1Page.tsx";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
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
      {
        path: "/how-to-create-telegram-bot-in-python",
        element: <Project1Page />,
      },
      {
        path: "/how-to-download-torrent-using-python",
        element: <Project2Page />,
      },
      {
        path: "/webview-in-android-studio",
        element: <Project3Page />,
      },
      {
        path: "/how-to-make-qr-code-scanner-app-from-scratch",
        element: <Project4Page />,
      },
      {
        path: "/esp32-camera-module",
        element: <Project5Page />,
      },
      {
        path: "/esp32-timelapse-camera",
        element: <Project6Page />,
      },
      {
        path: "/how-to-make-chatroom-app-in-python",
        element: <Project7Page />,
      },
      {
        path: "/secure-user-authentication-with-express-nodejs-and-prisma",
        element: <Project8Page />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
