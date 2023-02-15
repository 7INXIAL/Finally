/**
 * @存储大计算变量
 */
function useCallback(func) {
  let cache = {};
  return () => {
    let key = arguments[0];
    console.log(key,"key");
    if (cache[key]) {
      return cache[key];
    } else {
      let temp = func.apply(this, arguments);
      cache[key] = temp;
      return temp;
    }
  };
}

const fibonacci = useCallback((n) =>
  n === 0 || n === 1 ? n : fibonacci(n - 1) + n
);
