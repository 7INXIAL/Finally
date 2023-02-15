import React, { lazy } from "react";
import { createHashRouter } from "react-router-dom";
const Gloabl = lazy(() => import("./global/index.jsx"));
const Login = lazy(() => import("./login/index.jsx"));

import children from "./home/route";

export default createHashRouter([
  {
    path: "/",
    element: <Gloabl />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      ...children,
    ],
  },
]);
