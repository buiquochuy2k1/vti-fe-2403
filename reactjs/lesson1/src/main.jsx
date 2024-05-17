import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import UserData from "./components/UserData/UserData";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/SignupAndLogin/Signup.jsx";
import Login from "./components/SignupAndLogin/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "user-list",
    element: <UserData />,
  },
  {
    path: "blog-post",
    element: <div>Đây là trang blog post</div>,
  },
  {
    path: "contact",
    element: <div>Đây là trang contact</div>,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "forgot-pass",
    element: (
      <div className="margin-auto flex content-center items-center justify-center">
        <span>Tính năng đang phát triển</span>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
