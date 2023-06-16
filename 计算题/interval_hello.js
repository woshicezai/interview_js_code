function createRepeat(fn, repeat, interval) {
  let times = 0;
  return function (content) {
    let timer = setInterval(() => {
      times++;
      fn(content);
      if (times === repeat) {
        clearInterval(timer);
        timer = null;
      }
    }, interval * 1000);
  };
}

const fn = createRepeat(console.log, 3, 4);

fn("helloWorld"); // 每4秒输出一次helloWorld, 输出3次
