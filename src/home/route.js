import React, { lazy } from "react";
const Home = lazy(() => import("./index.jsx"));
const HLeft = lazy(() => import("./hleft/index.jsx"));
const HRight = lazy(() => import("./hright/index.jsx"));

export default [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "hleft",
        element: <HLeft />,
      },
      {
        path: "hright",
        element: <HRight />,
      },
    ],
  },
];
