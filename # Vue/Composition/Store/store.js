import { defineStore } from "pinia";
import { ref } from "vue";
export default defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    xxx(state) {},
    xxx() {
      // this
    },
    xxx: (state) => (props) => {},
    double: (state) => state.count * 2,
  },
  actions: {
    increment(params) {
      this.count++;
    },
  },
});

export const useHomeStore = defineStore("home", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }
  return { count, increment };
});
