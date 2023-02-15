// import { useStore } from "pinia";

let store = {};

// 动态引入文件
const files = import.meta.globEager("./modules/*/store.js");

// 读取文件列表
for (const url in files) {
  // 获得文件内容
  const file = files[url];
  // 提取文件名称
  const module = url.replace(/^\.\/|modules\/|\/store\.js/g, "");
  // 首字母大写
  const UpperCase = module
    .toLowerCase()
    .replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
  // 设置 store 引用名称 useXxxStore
  let key = `use${UpperCase}Store`;
  // 赋值
  store[key] = file.default;
}

export const { useHouseStore, useAnimalStore } = store;
