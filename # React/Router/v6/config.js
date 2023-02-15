import { createHashRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./Home.jsx"));

const children = [];

// 自动读取
const context = require.context("../modules", true, /route\.js/);

// 解析 & 组合
context.keys().forEach((url) => {
  const route = context(url);
  [].push.apply(children, route.default);
});

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children,
  },
]);

// App 可以集中在 app 中作路由鉴权
// useEffect(() => {
//   if (location.pathname === "/") {
//     navigate("/home/23?type=viewable");
//   }
// }, [location]);
