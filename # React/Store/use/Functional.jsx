import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decremented, asyncIncremented } from "./counterSlice";

export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(asyncIncremented(3)).then(() => {
      console.log("完成");
    });
  };
  return (
    <div>
      <div>
        <button onClick={() => dispatch(decremented(1))}>-</button>
        <span>{count}</span>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}
