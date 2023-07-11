/**
 * 实现一个等待函数，支持让 async 函数在执行时暂停一段时间，函数的入参为暂停的时间
 */

function waitRun(fnPromise, time) {
  return function (...args) {
    const that = this;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fnPromise.apply(that, args));
      }, time);
    });
  };
}

async function print(text) {
  const value = await Promise.resolve(3);
  console.log("print", value, text);
  return value;
}
const run = waitRun(print, 3000);

run("延迟 3s 执行").then((value) => {
  console.log("end", value);
});
