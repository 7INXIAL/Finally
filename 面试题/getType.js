/**
 * @获取数据类型
 */
function getType(obj) {
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (\S+)\]$/, "$1");
}
