// modules/example/route.js
export const route = [
  /* 基础 */
  {
    path: "/home",
    component: () => import("./pages/index.vue"),
    // 路由守卫 可以是 多个函数数组
    beforeEnter: [
      (to, from) => {
        return true;
      },
      (to, from) => {
        return true;
      },
    ],
    children: [{}],
  },
  /* 动态路由 */
  {
    path: "/home/:id",
  },
  /* 匹配路由 */
  // 增加了 正则匹配 如 * + ? 等
  // 增加了 自定义匹配存放key
  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  { path: "/user-:afterUser(.*)", component: UserGeneric },
  // /user /user/1
  { path: "/user/:orderId(\\d+)?" },
   /* 路由元信息 */
  // $route.matched $route.meta 以及 路由守卫中的 to.matched to.meta 可获取
  {
    path: "/",
    meta: {
      title: "示例",
    },
  },
];
