<template>
  <div>
    <!-- 路由视图 -->
    <router-view />
    <!-- 命名视图 -->
    <router-view name="helper" />
  </div>
</template>

<script>
export default {
  props: {
    id: [String, Number],
  },
  methods: {
    useRouter() {
      this.$router.push("/home");
      // path 和 query 使用
      this.$router.push({ path: "/home", query: { id: 22 } });
      // 命名路由 和 params 配套使用
      this.$router.push({ name: "home", params: { id: 22 } });
      this.$router.push({ path: `/home/${id}` });

      // 不会向 history 添加新纪录
      // 替换掉当前的纪录
      this.$router.replace();

      // 在 history 记录中向前或者后退多少步
      this.$router.go(n);
    },
    useRoute() {
      // 当前路径
      this.$route.path;
      // params
      this.$route.params;
      // query
      this.$route.query;
      // hash
      this.$route.hash;
      // 完整路径
      this.$route.fullPath;
      // 路由元
      this.$route.matched;
      // 姓名
      this.$route.name;
      // 重定向来源的路由的名字
      this.$route.redirectedFrom;
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // 通过 `vm` 访问组件实例
    });
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from) {
    // 导航离开该组件的对应路由时调用
    // 通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。
    // 可以访问组件实例 `this`
  },
};
</script>
