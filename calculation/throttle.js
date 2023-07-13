/**
 * 防抖
 * @param {*} fn
 * @param {*} timeout
 * @returns
 */
function debounce(fn, timeout) {
  let timer = null;
  return function (...args) {
    const that = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(that, args);
    }, timeout);
  };
}

/**
 * 节流
 * @param {*} fn
 * @param {*} timeout
 * @returns
 */
function throttle(fn, timeout) {
  let timer = null;
  return function (...args) {
    const that = this;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn.apply(that, args);
    }, timeout);
  };
}
