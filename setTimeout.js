/**
 *  setTimeout 倒计时误差
 * 1s 60帧调用
 */

function accurateSetTimeout(callback, delay) {
  let start = Date.now();
  const tick = () => {
    const now = Date.now();
    if (now - start >= delay) {
      callback();
    } else {
      requestAnimationFrame(tick);
    }
  };
  requestAnimationFrame(tick);
}

function accurateSetTimeout2(callback, delay) {
  let start = Date.now();
  const tick = () => {
    const elapsedTime = Date.now() - start;
    if (elapsedTime - delay >= 0) {
      callback();
    } else {
      setTimeout(tick, delay - elapsedTime);
    }
  };
  setTimeout(tick, delay);
}

accurateSetTimeout2(() => {
  console.log("run 2");
}, 2000);
