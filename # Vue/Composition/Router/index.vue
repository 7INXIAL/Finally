<script setup>
import {
  useRouter,
  useRoute,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from "vue-router";

// ###########  useRouter
const router = useRouter();

router.push("/home");
// path 和 query 使用
router.push({ path: "/home", query: { id: 22 } });
// 命名路由 和 params 配套使用
router.push({ name: "home", params: { id: 22 } });
router.push({ path: `/home/${id}` });

// 不会向 history 添加新纪录
// 替换掉当前的纪录
router.replace();

// 在 history 记录中向前或者后退多少步
router.go(n);

// ###########  useRoute
const route = useRoute();
// 当前路径
route.path;
// params
route.params;
// query
route.query;
// hash
route.hash;
// 完整路径
route.fullPath;
// 路由元
route.matched;
// 姓名
route.name;
// 重定向来源的路由的名字
route.redirectedFrom;

onBeforeRouteUpdate((to, from) => {});

onBeforeRouteLeave((to, from) => {});
</script>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // 通过 `vm` 访问组件实例
    });
  },
  beforeRouteUpdate(to, from) {},
  beforeRouteLeave(to, from) {},
};
</script>
