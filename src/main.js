import ReactDOM from "react-dom/client";
import React,{Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

console.log(router, "router?");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>LOADING...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
