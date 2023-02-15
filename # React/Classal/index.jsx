import React, {
  Component,
  PureComponent,
  Fragment,
  createRef,
  lazy,
  Suspense,
  startTransition,
} from "react";

// 组件懒加载
const Example = React.lazy(() => import("./Example"));

// PureComponent props 浅对比
export const myContext = createContext({
  msg: "只有当组件所处的树中没有匹配到 myContext.Provider 时, 这里的默认参数才会生效",
});

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      list: [1, 1, 1, 1],
    };

    // 组件节点的映射, 通过 this.ExampleRef.current 获取节点
    // ref 也可以是一个函数 (element) => {}
    this.ExampleRef = createRef();

    this.handleClick = () => {
      // 降低依赖 count 的 ui 渲染级别
      // startTransition(() => {
      //   this.setState({
      //     count: this.state.count + 1,
      //   });
      // });

      this.setState(
        {
          count: this.state.count + 1,
        },
        () => {
          // 将在 setState 完成合并并重新渲染组件后执行, 建议使用 componentDidUpdate() 来代替此方式
        }
      );
      // this.setState(
      //   (state, props) => {
      //     return { count: state.count + props.step };
      //   },
      //   () => {
      //     // 将在 setState 完成合并并重新渲染组件后执行, 建议使用 componentDidUpdate() 来代替此方式
      //   }
      // );
    };
  }

  // 另一种不需要声明 constructor super 的定义 state 方式
  // state  = {}

  // 挂载&更新 -> 根据props和state, 组成新的 state
  static getDerivedStateFromProps(props, state) {
    return {
      ...props,
      ...state,
      ...{
        key: "value",
      },
    };
  }

  // 更新 -> 判断是否更新组件: 更新前调用
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  // 挂载&更新 -> 渲染节点
  render() {
    return (
      <myContext.Provider
        value={{ msg: "因为这里有 Provider 组件, 所以上面的默认参数不会生效" }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Example left={<Component />} ref={ExampleRef}>
            <div onClick={(e) => handleClick(e)}>
              {this.state.list.map((_, key) => {
                return <Fragment key={key}>{count}</Fragment>;
              })}
            </div>
          </Example>
        </Suspense>
      </myContext.Provider>
    );
  }
  // 挂载 -> 组件创建完成
  componentDidMount() {
    // TODO
  }

  // 更新 -> 在组件更新节点之前获得当前快照, 可向 componentDidUpdate 传递信息
  getSnapshotBeforeUpdate(lastProps, lastState) {
    return {
      msg: `to function componentDidUpdate a msg`,
    };
  }

  // 挂载&更新 -> react 更新dom和refs 这里是内部处理流程没有钩子

  // 更新 -> 节点更新完成后立即调用, 可以获得 getSnapshotBeforeUpdate 传来的信息
  componentDidUpdate(prevProps, prevState, snapshot) {
    // TODO
  }

  // 错误 -> 会在后代组件抛出错误后被调用, 捕获错误, 用于渲染备用UI
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // 错误 -> 会在后代组件抛出错误后被调用, 捕获错误, 用于打印错误信息
  componentDidCatch(error, info) {}

  // 销毁 -> 组件即将销毁
  componentWillUnmount() {
    // TODO
  }
}

// 定义 props 参数
Index.propTypes = {
  name: PropTypes.string,
};

// 定义 props 默认参数
Index.defaultProps = {
  name: "Stranger",
};
