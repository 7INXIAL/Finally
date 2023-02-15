import { lazy } from "react";

import App from "../App";

const Home = lazy(() => import("./Home.jsx"));

const routes = [];

// 自动读取
const context = require.context("../modules", true, /route\.js/);

// 解析 & 组合
context.keys().forEach((url) => {
  const route = context(url);
  [].push.apply(routes, route.default);
});

// v5 
// 注意 component  返回函数或者 class
// children => routes
// 子路由 需要全路径
export default [
  {
    path: "/",
    component: App,
    routes: [
      ...routes,
      {
        path: "/home/:id",
        component: Home,
      },
    ],
  },
];

// App 可以集中在 app 中作路由鉴权
// useEffect(() => {
//   if (location.pathname === "/") {
//     history.push("/home/23?type=viewable");
//   }
// }, [location]);
