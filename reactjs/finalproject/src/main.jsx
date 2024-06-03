import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./components/SignupPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import UserDetail from "./components/Mainpage/UserDetail.jsx";
import CreateUser from "./components/Mainpage/UserCreate.jsx";
import UserList from "./components/Mainpage/UserList.jsx";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/user/:id",
        element: <UserDetail />,
      },
      {
        path: "/user/create",
        element: <CreateUser />,
      },
      {
        path: "/users-list",
        element: <UserList />,
      },
    ],
  },
  {
    path: "register",
    element: <SignupPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
