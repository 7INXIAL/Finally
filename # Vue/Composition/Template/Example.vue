<template>
  <div class="example" @click="handleClick('props', $event)">
    <!-- 在“change”时而非“input”时更新 -->
    <input v-model.lazy="msg" />
    <!-- 数字键入 -->
    <input v-model.number="age" type="number" />
    <!-- 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符： -->
    <input v-model.trim="msg" />

    <slot :ids="ids"></slot>
    <slot name="abs" :ids="ids"></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 这时候可以通过 useAttrs() 来获取到 除 props emits class style 外的 属性
};
</script>

<script setup>
import { onActivated, onDeactivated } from "vue";
import { useAttrs, inject } from "vue";
// const props = defineProps(["ids"]);
const props = defineProps({
  ids: Array,
  // v-model:ids.xxxx ids的修饰符
  idsModifiers: {
    default: () => ({}),
  },
});
// 声明 emit 事件
// const emit = defineEmits(['update:ids', 'ok'])
// EMIT 校验
const emit = defineEmits({
  // 校验
  ok() {
    return true;
  },
  // 实现自定义 v-model
  // <Example v-model:ids="xxxx" />
  "update:ids": null,
});

// 默认 v-model 采用 modelValue 定义值, modelModifiers 接收 修饰符, update:modelValue 提交更改
// const props = defineProps(['modelValue','modelModifiers'])
// const emit = defineEmits(['update:modelValue'])
// <Example v-model="xxxx" />

// <script setup> 的组件是默认私有的
// 模版引用时, 暴露什么给父组件, 通过 defineExpose 定义
defineExpose({
  click: handleClick,
});

// 透穿的属性
const attr = useAttrs();

const handleClick = () => {
  // 触发 v-model 实现更新
  emit("update:ids", []);
  // 自定义事件
  emit("ok");
};

// 接收注入
const { location, updateLocation } = inject("location");

// 指令
const vDirective = {
  // 参数:{
  //   el: 指令所绑定的元素，可以用来直接操作 DOM,
  //   binding: {
  //     name(指令名称), arg(参数), modifiers(修饰符), value(值), expression(表达式), oldValue(旧值);
  //   },
  //   vnode: 虚拟节点,
  //   示例1: v-name:arg.modifiers="value" -> v-wahaha:msg.editable="[1,2,3]",
  //   示例2: v-name:arg.modifiers="expression" -> v-wahaha:msg.editable="1 + 2"
  // }

  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {},
};

const vXxxx = (el, binding) => {
  // mounted updated
};

onActivated(() => {
  // TODO
});

onDeactivated(() => {
  // TODO
});
</script>
