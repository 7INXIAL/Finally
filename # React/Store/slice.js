// src/modules/moduleA/slice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncIncremented = createAsyncThunk(
  "counter/asyncIncremented",
  (props) => {
    return new Promise((s) => {
      setTimeout(() => {
        s(props);
      }, 500);
    });
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    decremented(state, action) {
      state.count -= action.payload;
    },
    incremented(state, action) {
      state.count += action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(asyncIncremented.fulfilled, (state, { payload }) => {
  //     state.count += payload;
  //   });
  // },
  extraReducers: {
    [asyncIncremented.fulfilled]: (state, { payload }) => {
      state.count += payload;
    },
  },
});

const { name, actions, reducer, caseReducers } = counterSlice;

export const { incremented, decremented } = actions;

export default reducer;