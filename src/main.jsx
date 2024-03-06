import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Register from "./pages/Authentication/Register.jsx";
import MoreEvents from "./pages/MoreEvents.jsx";
import Login from "./pages/Authentication/Login.jsx";
import Profile from "./pages/Profile.jsx";
import EventDetails from "./components/EventDetails.jsx";
import PaymentComponent from "./components/Auth/PaymentComponent.jsx";
import SignUp from "./pages/Authentication/SignUp.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/register", element: <SignUp /> },
  { path: "/more-events/:departmentName", element: <MoreEvents /> },
  { path: "/login", element: <Login /> },
  { path: "/profile", element: <Profile /> },

  {
    path: "/events/:uniqueName",
    element: <EventDetails />,
  },
  {
    path: "/payment",
    element: <PaymentComponent />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
