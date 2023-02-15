import {
  Fragment,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
  useRef,
  useId,
  useDebugValue,
  createContext,
  useReducer,
  useDeferredValue,
  useTransition,
  lazy,
  Suspense,
} from "react";

// 组件懒加载
const Example = React.lazy(() => import("./Example"));

export const myContext = createContext({
  msg: "只有当组件所处的树中没有匹配到 myContext.Provider 时, 这里的默认参数才会生效",
});

function Index(props) {
  //#######
  /* useState */
  //#######
  const [count, setCount] = useState(0);
  const [list, setList] = useState([1, 1, 1, 1]);

  const handleClick = () => {
    setCount(count + 1);
    // setCount((count) => count + props.step);
  };

  //#######
  /* useEffect */
  //#######
  // componentDidMount componentDidUpdate
  useEffect(() => {
    // componentWillUnmount
    return () => {};
  });

  // watch
  useEffect(() => {
    // TODO
  }, [count]);

  // componentDidMount
  useEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    }
    // 这里会闪烁, 因为异步执行这里时计算量很大, 计算后才更新 count
    count(10000);
  }, []);

  //#######
  /* useLayoutEffect */
  //#######
  // 同步执行
  useLayoutEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    }
    // 这里不会闪烁
    count(10000);
  }, []);

  //#######
  /* useCallback */
  //#######
  // 缓存方法 可避免方法被监听时的消耗,可添加依赖, 当依赖项改变时 函数才更新
  const func = useCallback(() => {
    // TODO 例: 仅仅是改变 count
  }, []);

  //#######
  /* useMemo */
  //#######
  // 计算属性, 可以添加依赖 只计算一次, 优化性能
  const computed = useMemo(() => {
    let data = [];
    for (let index = 0; index < 100; index++) {
      data.push(index);
    }
    return data;
  }, []);

  //#######
  /* useRef */
  //#######
  // 组件节点的映射, 通过 this.exampleRef.current 获取节点
  // ref 也可以是一个函数 (element) => {}
  const ExampleRef = useRef();

  //#######
  /* useReducer */
  //#######
  // 初始数据
  const initialState = { count: 0 };

  // 初始化数据的方法
  function init(initialProps) {
    // initialProps 初始化参数
    return initialProps || { count: 0 };
  }

  // 处理器
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  // useReducer('处理器','初始数据');
  // useReducer('处理器','初始化方法的参数','初始化方法');
  const [state, dispatch] = useReducer(reducer, initialState, init);
  // state.count
  // dispatch({type: 'increment', payload: 23}

  //#######
  /* useDeferredValue */
  //#######
  // 获得一个渲染优先级被降低的代理
  const deferredCount = useDeferredValue(count);

  //#######
  /* useTransition */
  //#######
  // 降低依赖 count 的 ui 的渲染优先级
  // 可通过 loading 来进行渲染 等待的界面, 如组件的懒加载优化
  // 如不使用 loading 则会在切换之前页面不动, 对用户来讲有时比 等待界面 更好
  // 例子如下:
  //   const computedCount = () => {
  //     let i = 0;
  //     while (i < 1000000000) {
  //       i++;
  //     }
  //     return i + count;
  //   };
  const [loading, startTransition] = useTransition(2000);
  startTransition(() => {
    setCount((count) => count + 1);
  });

  //#######
  /* useDebugValue */
  //#######
  // 在开发者工具中, 为 count 设置名称为 ohahaha
  useDebugValue(count, (count) => `ohahaha`);

  //#######
  /* useId */
  //#######
  // 主要是用来解决服务端渲染时, id 不唯一
  const onlyId = useId();

  return (
    <myContext.Provider
      value={{ msg: "因为这里有 Provider 组件, 所以上面的默认参数不会生效" }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Example left={<Component />} func={func} ref={ExampleRef}>
          <div onClick={(e) => handleClick(e)}>
            {list.map((_, key) => {
              return <Fragment key={key}>{count}</Fragment>;
            })}
          </div>
        </Example>
      </Suspense>
    </myContext.Provider>
  );
}

// 定义 props 参数
Index.propTypes = {
  name: PropTypes.string,
};

// 定义 props 默认参数
Index.defaultProps = {
  name: "Stranger",
};

export default Index;
