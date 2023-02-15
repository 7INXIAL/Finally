<template>
  <div @click="handleClick">
    <keep-alive>
      <Suspense>
        <component
          v-bind="object"
          v-model="boolean"
          :is="'Example'"
          :true-value="truevalue"
          :false-value="falsevalue"
          :ref="initRef"
          @ok="handleEvent"
        >
          <!-- ref="Example" -->
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

        <!-- 加载中状态 -->
        <template #fallback> 正在加载... </template>
      </Suspense>
    </keep-alive>
  </div>
</template>

<script setup>
import Example from "./Example.vue";
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
import { reactive, shallowReactive, readonly, shallowReadonly } from "vue";
import { ref, shallowRef, isRef, unref, toRef, toRefs } from "vue";
import { isProxy, isReactive, isReadonly } from "vue";
import {
  computed,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
} from "vue";
import { nextTick, provide } from "vue";
const state = reactive({ count: 0 });
const count = ref(0);
console.log(count); // { value: 0 }
console.log(count.value); // 0

const props = defineProps({
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
});

const xxx = computed(() => {
  return count.value + 1;
});
/// xxx.value

const xxxx = computed({
  get() {
    return count.value + 1;
  },
  set(newValue) {
    count.value + newValue;
  },
});
/// xxxx.value

const unwatch7232 = watch(
  count,
  (newV, oldV) => {
    // TODO
  },
  {
    deep: true,
    immediate: true,
    flush: "sync", // 'post'
  }
);
const unwatch36232 = watch(
  (newV, oldV) => count.value + xxxx.value,
  () => {
    // TODO
  }
);
watch([count.value, () => count.value + xxxx.value], ([newV1, newV2]) => {
  // TODO
});

const unwatch32323 = watchEffect(
  () => {
    this.load(page.value);
  },
  {
    flush: "post", // vue 更新后触发回调, 默认是更新前
  }
);

const unwatch33232 = watchPostEffect(() => {
  // 在 vue 更新之后执行
});

// 模版引用 值 必须同名
const Example = ref(null);

// 模版引用 函数
const initRef = (el) => {
  if (el) {
  }
};
const handleEvent = () => {
  // 阻止事件继续传播        v-on:click.stop
  // 阻止事件默认行为        v-on:submit.prevent
  // 捕获内部元素触发的事件   v-on:click.capture
  // 只有当前元素触发才生效   v-on:click.self
};

// 注入依赖
const location = ref("North Pole");
function updateLocation() {
  location.value = "South Pole";
}
provide("location", {
  location,
  updateLocation,
});

onBeforeMount(() => {
  // TODO
});

onMounted(() => {
  // TODO
  nextTick(() => {
    // 访问更新后的 DOM
  });
  // 模版引用
  Example;
});

onBeforeUpdate(() => {
  // TODO
});

onUpdated(() => {
  // TODO
});

onBeforeUnmount(() => {
  // TODO
});

onUnmounted(() => {
  // TODO
});
</script>
