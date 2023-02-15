import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router.js";

// 创建实例
const app = createApp(App);
// 实例化
const store = createPinia();
// 使用插件
app.use(store).use(router);
// 挂载
app.mount("#app");
