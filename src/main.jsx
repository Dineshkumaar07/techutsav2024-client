import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Register from "./pages/Authentication/Register.jsx";
import MoreEvents from "./pages/MoreEvents.jsx";
import Login from "./pages/Authentication/Login.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/register", element: <Register /> },
  { path: "/more-events", element: <MoreEvents /> },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
