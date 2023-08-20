function throttle(fn, wait) {
  let timeHander = null;
  return function (...args) {
    if (timeHander) {
      return;
    }
    const context = this;
    timeHander = setTimeout(() => {
      fn.apply(context, args);
      timeHander = null;
    }, wait);
  };
}

function throttle(fn, interval) {
  let lastExecutionTime = 0;
  let timeoutId = null;

  return function (...args) {
    const context = this;
    const currentTime = Date.now();

    if (currentTime - lastExecutionTime >= interval) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      fn.apply(context, args);
      lastExecutionTime = currentTime;
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        fn.apply(context, args);
        lastExecutionTime = Date.now();
        timeoutId = null;
      }, interval - (currentTime - lastExecutionTime));
    }
  };
}

/**
 * 立即执行+取消执行
 * @param {} func
 * @param {*} wait
 * @param {*} immediate
 * @returns
 */
function debounce(func, wait, immediate) {
  let timeout;
  function d(...args) {
    const that = this;
    if (immediate) {
      if (!timeout) {
        func.apply(that, args);
      }
      timeout = setTimeout(() => {
        clearTimeout(timeout);
        timeout = null;
      }, wait);
    } else {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        func.apply(that, args);
        timeout = null;
      }, wait);
    }
  }
  d.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return d;
}
