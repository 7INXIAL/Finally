import {
  forwardRef,
  memo,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { myContext } from ".index";

// memo props 浅对比
export const Example = memo((props) => {
  return (
    <div
      style={{
        backgroundColor: "#ffc107",
        color: "#fff",
        padding: "20px",
        border: "6px solid",
        margin: "20px 0",
      }}
    >
      {props.children}
      {props.left}
      <input ref={props.forwardedRef} />
    </div>
  );
});

// ref 转发, 函数组件 无法绑定 ref, 必须转发后才能使用
export default forwardRef((props, ref) => {
  // 优化 ref, 使ref由原来的dom节点, 变成自定义的对象
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: inputRef.current.focus(),
  }));

  //#######
  /* Context */
  //#######
  // 消费 myContext 方式1 useContext
  const context = useContext(myContext);

  // 消费 myContext 方式2 Context.Consumer 其中返回一个函数, 参数为 context value
  return (
    <myContext.Consumer>
      {/* 返回一个带有 value 的函数, 需要return 一个 react 节点 */}
      {({ msg }) => (
        // 优化 ref 中转一次 inputRef
        <Example {...props} forwardedRef={inputRef}>
          {msg}
        </Example>
      )}
    </myContext.Consumer>
  );

  // 直接转发 ref
  // return <Example {...props} forwardedRef={ref} />;
});
