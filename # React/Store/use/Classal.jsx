import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { decremented, asyncIncremented } from "./*/slice";

class Counter extends PureComponent {
  handleClick = () => {
    this.props.asyncIncremented(2).then(() => {
      console.log("异步动作完成");
    });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.props.decremented(3)}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default connect(
  (store) => {
    return {
      count: store.counter.count,
    };
  },
  (dispatch) => {
    return {
      decremented: (props) => dispatch(decremented(props)),
      asyncIncremented: (props) => dispatch(asyncIncremented(props)),
    };
  }
)(Counter);
