function setIntervalSelf(callback, timeout) {
  let stop = false;
  function call(callback) {
    let handler = setTimeout(() => {
      callback();
      call(callback);
    }, timeout);
    if (stop) {
      clearTimeout(handler);
      handler = null;
    }
  }
  call(callback);
  return function setStop() {
    stop = true;
  };
}

const stop = setIntervalSelf(() => {
  console.log("setIntervalSelf");
}, 1000);

setTimeout(() => {
  stop();
}, 10000);
