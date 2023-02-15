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
  inheritAttrs: false, // 这时候可以通过 $attr 来获取到 除 props class style 外的 属性
  model: {
    prop: "ids",
    event: "changeIds",
  },
  directives: {
    // 参数:{
    //   el: 指令所绑定的元素，可以用来直接操作 DOM,
    //   binding: {
    //     name(指令名称), arg(参数), modifiers(修饰符), value(值), expression(表达式), oldValue(旧值);
    //   },
    //   vnode: 虚拟节点,
    //   示例1: v-name:arg.modifiers="value" -> v-wahaha:msg.editable="[1,2,3]",
    //   示例2: v-name:arg.modifiers="expression" -> v-wahaha:msg.editable="1 + 2"
    // }
    xxx: {
      bind: (el, binding, vnode) => {
        // 只调用一次，指令第一次绑定到元素时调用。
      },
      inserted: (el, binding, vnode) => {
        // 被绑定元素插入父节点时调用
      },
      update: (el, binding, vnode, oldVnode) => {
        // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
        // oldVnode 上一个虚拟节点 仅在 update 和 componentUpdated 钩子中可用
      },
      componentUpdated: (el, binding, vnode, oldVnode) => {
        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
        // oldVnode 上一个虚拟节点 仅在 update 和 componentUpdated 钩子中可用
      },
      unbind: (el, binding, vnode) => {
        // 只调用一次，指令与元素解绑时调用。
      },
    },
    xxx: (el, binding) => {
      // bind update
    },
  },
  props: ["ids"],
  methods: {
    // 原生click事件
    handleClick() {
      // 触发 v-model 实现更新
      this.$emit("changeModel", []);
      // 自定义事件
      this.$emit("ok");
    },
  },
  activated() {},
  deactivated() {},
};
</script>
