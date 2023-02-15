/**
 * @柯里化
 */
let getC = (x) => (y) => x + y;
getC(1)(2);
