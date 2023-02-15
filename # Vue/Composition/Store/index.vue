<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores";
const counter = useCounterStore();
// 解构
const { count } = storeToRefs(counter);
count.value++;
counter.count++;
// 带自动补全 ✨
counter.$patch({ count: counter.count + 1 });
// 或使用 action 代替
counter.increment();
</script>

<script>
import { mapState, mapWritableState, mapActions } from "pinia";
export default {
  computed: {
    // 只读
    ...mapState(useCounterStore, {
      double: "double",
    }),
    // 可编辑
    ...mapWritableState(useCounterStore, ["counter"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
  },
  setupp() {
    const counterStore = useCounterStore();
    // 此订阅将在组件卸载后保留
    counterStore.$subscribe(callback, { detached: true });
    // 此订阅将在组件卸载后保留
    counterStore.$onAction(callback, true);
  },
};
</script>
