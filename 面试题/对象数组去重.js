const unique = (props) => {
  return [
    ...new Set(
      props
        .map((item) =>
          // 集合 keys
          Object.keys(item)
            // 统一规则排序
            .sort()
            // 重组对象
            .reduce((obj, key) => {
              return {
                ...obj,
                [key]: item[key],
              };
            }, {})
        )
        // toString
        .map((_) => JSON.stringify(_))
    ),
    // 还原
  ].map((_) => JSON.parse(_));
};
