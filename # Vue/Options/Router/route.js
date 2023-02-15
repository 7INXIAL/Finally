// modules/**/route.js
export default [
  /* 基础 */
  {
    path: "/home",
    component: () => import("./views"),
    children: [
      {
        // 动态路径参数 $route.params.id
        path: "list/:id", // -> /home/list/12
      },
      {
        // 通配符 *
        // pathMatch 可获取到被 匹配的部分
        path: "page-*", // 例如: /home/page-apple  $route.params.pathMatch -> apple
      },
        // 匹配其他不符合条件的地址
      {
        path: "", // -> /home/other /home/xxxxx
      },
    ],
  },
  /* 命名路由 */
  // router.push({ name: 'home' })
  {
    path: "/",
    name: "home",
    component: () => import("./views"),
  },
  /* 重定向 */
  // 路由直接跳转到 /home
  {
    path: "/",
    redirect: "/home",
  },
  /* 别名 */
  // 这两个路径都走这个组件
  {
    path: "/",
    alias: "/home",
    component: () => import("./views"),
  },
  /* 路由独享守卫 */
  {
    path: "/",
    beforeEnter: (to, from) => {
      return true;
    },
  },
  /* 路由元信息 */
  // $route.matched 以及 路由守卫中的 to.matched 可获取
  {
    path: "/",
    meta: {
      title: "示例",
    },
  },
  /* 路由组件传参 */
  // $route.params, $route.query -> props
  // 需要组件内定义相应的 props
  {
    path: "/",
    // 布尔 /:id $route.params.id -> props.id
    props: true,
    // 对象 静态传参
    props: { editable: false },
    // 函数 可以进行类型转换等
    props: (route) => ({ count: route.query.count * 1 }),
  },
  /* 命名视图 */
  {
    path: "/",
    components: {
      default: Components,
      helper: ComponentsHelper,
    },
  },
];
