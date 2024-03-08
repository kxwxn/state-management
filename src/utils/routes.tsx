import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import Home from "../pages/Home";
import Redux from "../pages/Redux";
import Recoil from "../pages/Recoil";
import Zustand from "../pages/Zustand";
import Jotai from "../pages/Jotai";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "redux", element: <Redux /> },
      { path: "recoil", element: <Recoil /> },
      { path: "zustand", element: <Zustand /> },
      { path: "jotai", element: <Jotai /> },
    ],
  },
]);
