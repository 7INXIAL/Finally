import { configureStore } from "@reduxjs/toolkit";
import counter from "./*/slice";

export default configureStore({
  // 这里会自动调用 combineReducers
  reducer: {
    // ...all moudles,
    counter,
  },
  middleware: {}, // 其他中间件
});

// USE store
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./store";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
