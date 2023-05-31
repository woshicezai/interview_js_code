/**
 * 实现bind方法
 * @param {*} fn
 * @param {*} context
 * @returns
 */
function bind(fn, context) {
  return function (...args) {
    return fn.apply(context, args);
  };
}
