class SimplePromise {
  constructor(executor) {
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    this.status = "pending"; //fulfilled,rejected
    this.value = null;
    this.reason = null;

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.resolveCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        this.rejectCallbacks.forEach((callback) => callback());
      }
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    const newPromise = new SimplePromise((resolve, reject) => {
      const resolveC = () => {
        try {
          const value = onFulfilled(this.value);
          resolve(value);
        } catch (e) {
          reject(e);
        }
      };
      const rejectC = () => {
        try {
          onRejected();
          resolve(this.reason);
        } catch (e) {
          reject(e);
        }
      };

      if (this.status === "pending") {
        this.resolveCallbacks.push(() => setTimeout(resolveC, 0));
        this.rejectCallbacks.push(() => setTimeout(rejectC, 0));
      } else if (this.status === "fulfilled") {
        setTimeout(resolveC, 0);
      } else if (this.status === "rejected") {
        setTimeout(rejectC, 0);
      }
    });

    return newPromise;
  }
}

const p = new SimplePromise((resolve) => {
  setTimeout(() => {
    console.log("启动");
    resolve();
  }, 3000);
})
  .then(() => {
    console.log("运行 1");
    return 1;
  })
  .then(() => {
    console.log("运行 2");
    return 2;
  });
