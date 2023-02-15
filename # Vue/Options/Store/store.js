import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const state = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};

//==================================================
// -> getters ****

// store.getters.g1
export const g1 = (state, getters) => {
  return state.xxx + getters.g2(2);
};

// store.getters.g2(props)
export const g2 = (state, getters) => (props) => {
  return state.xxx + props * 2;
};

//==================================================
// -> mutations ****

// store.commit("m1", 10);
// store.commit({
//   type: "m1",
//   props: { xxx: "xxx" },
//   xxxx: "xxxx",
// });

export const m1 = (state, props) => {
  state.xxx = "xxx" + props;
};

//==================================================
// -> actions ****

// store.dispatch("a1");
// store.dispatch("a2", 10);
// store.dispatch({
//   type: "a2",
//   params: { xxx: "xxx" },
//   xxxx: "xxxx",
// });

export const a1 = (context) => {
  // context.state, context.getters, context.commit, context.dispatch
};

export const a2 = ({ state, getters, commit, dispatch }, params) => {};
