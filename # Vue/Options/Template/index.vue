<template>
  <div @click="handleClick">
    <keep-alive>
      <component
        :is="'Example'"
        v-bind="object"
        @ok="handleEvent"
        ref="Example"
      >
        <template #defalut="{ ids }">
          <div v-for="id in ids" :key="id">
            {{ id }}
          </div>
        </template>

        <template #abs="{ ids }">
          <div v-for="id in ids" :key="id">
            {{ id }}
          </div>
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Example from "./Example.vue";
export default {
  components: {
    Example,
  },
  data() {
    return {
      // 独立作用域, 组件多次实例化时不会相互影响
    };
  },
  props: {
    id: {
      type: [Number, String],
      default: 1,
    },
    editable: {
      type: Boolean,
      required: true,
    },
    ids: {
      type: Array,
      default: () => [],
    },
    info: {
      type: Object,
      validator: (info) => {
        return "id" in info;
      },
    },
  },
  computed: {
    xxx() {
      return this.xxxxx + 2;
    },
    xxx: {
      get: () => {
        return this.xx + this.xxxxx;
      },
    },
    xxx: {
      get: () => {
        return this.xx + this.xxxxx;
      },
      set: () => {
        this.xx + 1;
        this.xxxxx + 2;
      },
    },
  },
  watch: {
    xxx: () => {
      // TODO
    },
    xxx: {
      handler() {
        // TODO
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleEvent() {
      // 阻止事件继续传播        v-on:click.stop
      // 阻止事件默认行为        v-on:submit.prevent
      // 捕获内部元素触发的事件   v-on:click.capture
      // 只有当前元素触发才生效   v-on:click.self
    },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    // 下次dom更新后执行
    this.$nextTick(() => {});
    // 强制刷新
    this.$forceUpdate();

    // 模版引用
    this.$refs.Example;
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>
