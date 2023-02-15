import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 基础路由
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
];

// 自动读取
const context = require.context("../modules", true, /route\.js/);

// 解析 & 组合
context.keys().forEach((url) => {
  const route = context(url);
  [].push.apply(routes, route.default);
});

// 生成实例
const router = new VueRouter({
  mode:"hash", // 默认值: "hash" (浏览器环境) | "abstract" (Node.js 环境), 可选值: "hash" | "history" | "abstract"
  routes,
});

// 全局前置守卫 - 组件加载前被阻止 浏览器不会加载js文件
router.beforeEach((to, from, next) => {
  console.log("beforeEach!");
  next();
});

// 全局解析守卫 - 组件加载解析后被阻止 浏览器会加载js文件
router.beforeResolve((to, from, next) => {
  console.log("beforeResolve!");
  next();
});

// 全局后置钩子
router.afterEach((to, from) => {
  console.log("afterEach!");
});

export default router;
