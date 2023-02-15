import { lazy } from "react";
import { Outlet } from "react-router-dom";

function A() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

const ComponentA = lazy(() => import("./A"));

export default [
  {
    path: "a",
    element: <ComponentA />,
    children: [
      {
        path: "list",
        element: <ComponentB />,
      },
    ],
  },
];
