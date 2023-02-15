import React, { Component, forwardRef } from "react";
import { myContext } from ".index";
class Example extends Component {
  // 第一种绑定 context 方式, 绑定后可以通过 this.context 使用
  static contextType = myContext;
  render() {
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
        {this.props.children}
        {this.props.left}
        <input ref={this.props.forwardedRef} />
      </div>
    );
  }
}

// 第二种绑定 context 方式, 绑定后可以通过 this.context 使用
Example.contextType = myContext;

// ref 转发
export default forwardRef((props, ref) => {
  return <Example {...props} forwardedRef={ref} />;
});
