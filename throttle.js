function throttle(func, wait) {
  let timeout = null;
  let pre = 0;
  function throttled(...args) {
    const that = this;
    const now = Date.now();
    const span = wait - (now - pre);
    if (span <= 0) {
      func.apply(that, args);
      pre = Date.now();
    } else if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(that, args);
        pre = Date.now();
        timeout = null;
      }, span);
    }
  }
  return throttled;
}

function throttle(func, wait, options) {
  let pre = 0;
  let timeout = null;
  return function (...args) {
    const that = this;
    const now = Date.now();
    !pre && !options.leading && (pre = now);
    const span = wait - (now - pre);
    if (span <= 0) {
      func.apply(that, args);
      pre = Date.now();
    } else if (!timeout && options.trailing) {
      timeout = setTimeout(() => {
        func.apply(that, args);
        // pre = Date.now();
        pre = !options.leading ? 0 : Date.now();
        timeout = null;
      }, span);
    }
  };
}
