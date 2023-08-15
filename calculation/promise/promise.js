// console.log("script start");
// setTimeout(function () {
//   console.log("setTimeout");
//   setTimeout(function () {
//     console.log("setTimeout2");
//   }, 0);
// }, 0);
// new Promise((resolve) => {
//   console.log("Promise");
//   resolve();
// })
//   .then(function () {
//     console.log("promise1");
//   })
//   .then(function () {
//     console.log("promise2");
//   });
// console.log("script end");

/**
 * script start
 * Promise
 * script end
 * promise1
 * promise2
 * setTimeout
 * setTimeout2
 */

class SimplePromise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback());
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const newPromise = new SimplePromise((resolve, reject) => {
      const handleFulfilled = () => {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = () => {
        try {
          const result = onRejected(this.reason);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      if (this.status === "fulfilled") {
        setTimeout(handleFulfilled, 0);
      } else if (this.status === "rejected") {
        setTimeout(handleRejected, 0);
      } else if (this.status === "pending") {
        this.onFulfilledCallbacks.push(() => setTimeout(handleFulfilled, 0));
        this.onRejectedCallbacks.push(() => setTimeout(handleRejected, 0));
      }
    });

    return newPromise;
  }
}

// const p = new SimplePromise((resolve) => {
//   setTimeout(() => {
//     console.log("启动");
//     resolve();
//   }, 3000);
// })
//   .then(() => {
//     console.log("运行 1");
//     return 1;
//   })
//   .then(() => {
//     console.log("运行 2");
//     return 2;
//   });

/**
 * 异步多任务
 */
async function sleep(delayTime, content) {
  return new Promise((resolve) => {
    console.log(delayTime, content, "start");
    setTimeout(() => {
      console.log(delayTime, content, "end", "-----------");
      resolve();
    }, delayTime * 1000);
  });
}

async function asyncPool({ limit, items }) {
  const tasks = new Set();
  const allItems = [];
  const item_promise = async (item) => await item();

  for (const item of items) {
    const item_p = item_promise(item).then(() => tasks.delete(item_p));
    allItems.push(item_p);
    tasks.add(item_p);
    if (tasks.size >= limit) {
      await Promise.race(tasks);
    }
  }

  return Promise.all(allItems);
}

async function start() {
  await asyncPool({
    limit: 2,
    items: [
      () => sleep(1, "吃饭"),
      () => sleep(3, "睡觉"),
      () => sleep(5, "打游戏"),
      () => sleep(3.5, "学习算法"),
      () => sleep(4, "学习react和vue"),
    ],
  });
  console.log("学习结束");
}

start();

const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
  myPromise
    .then((res) => {
      console.log("执行第一个then", res);
      return res;
    })
    .then((res) => {
      console.log("执行第二个then", res);
    });
  setTimeout(() => console.log("Timeout!"), 0);
  console.log("Last line!");
}

async function funcTwo() {
  console.log("进入funcTwo");
  const res = await myPromise;
  console.log("执行完第一个await，继续往下执行");
  console.log(await res);
  console.log("执行完第二个await，继续往下执行");
  setTimeout(() => console.log("Timeout!"), 0);
  console.log("Last line!");
}

funcOne();
funcTwo();
