import { lazy } from "react";
import { renderRoutes } from "react-router-config";

function A(props) {
  return <div>{renderRoutes(props.route.routes)}</div>;
}

const ComponentA = lazy(() => import("./A"));

export default [
  {
    path: "a",
    component: ComponentA,
    routes: [
      {
        path: "list",
        component: ComponentB,
      },
    ],
  },
];
