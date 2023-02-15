import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 定义
const modules = {};

// 自动读取
const context = require.context("../modules", true, /store\/index\.(js|ts)$/);

// 解析 & 组合
context.keys().forEach((key) => {
  modules[key.replace(/^\.\/|\/store\/index\.(js|ts)$/g, "")] = {
    namespaced: true,
    ...context(key).default,
  };
});

// 生成实例
export default new Vuex.Store({
  modules,
  strict: true,
});
