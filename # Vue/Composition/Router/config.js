import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
  {
    path: "/",
    redirect: "/house",
  },
];

// 动态引入
const files = import.meta.globEager("./modules/*/route.js");
// 读取文件
for (const key in files) {
  const { route } = files[key];
  [].push.apply(routes, route);
}
// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 全局前置守卫 - 组件加载前被阻止 浏览器不会加载js文件
router.beforeEach((to, from, next) => {
  console.log("beforeEach!");
  // next() 可以不用
  return true;
});

// 全局解析守卫 - 组件加载解析后被阻止 浏览器会加载js文件
router.beforeResolve((to, from, next) => {
  console.log("beforeResolve!");
  // next() 可以不用
  return true;
});

// 全局后置钩子
router.afterEach((to, from) => {
  console.log("afterEach!");
});

export default router;
