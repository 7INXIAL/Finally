import React from "react";
import { createRoot } from "react-dom/client";
import router from "./config";
import { HashRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <HashRouter>
      <Switch>{renderRoutes(router)}</Switch>
    </HashRouter>
  </React.Suspense>
);
