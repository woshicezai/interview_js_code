function debounce(fn, wait) {
  let timeHander = null;
  return function (...args) {
    if (timeHander) {
      clearTimeout(timeHander);
      timeHander = null;
    }
    const context = this;
    timeHander = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

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
