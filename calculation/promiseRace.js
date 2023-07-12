function Race(promises) {
  return new Promise((resolve) => {
    promises.forEach((promise) => {
      promise.then((res) => {
        resolve(res);
      });
    });
  });
}

function mockPromise(value, timeout) {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle(value);
    }, timeout);
  });
}

Race([mockPromise(1, 1000), mockPromise(2, 2000), mockPromise(3, 5000)]).then(
  (value) => {
    console.log(value);
  }
);
