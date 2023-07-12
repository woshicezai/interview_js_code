/**
 * 防抖
 * @param {*} fn
 * @param {*} timeout
 * @returns
 */
function debounce(fn, timeout) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
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
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn.apply(this, args);
    }, timeout);
  };
}
