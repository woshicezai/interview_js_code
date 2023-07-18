function promiseAll(promiseArray) {
  const result = [];
  return new Promise((resolve, reject) => {
    promiseArray.forEach((itemPromise) => {
      itemPromise
        .then((data) => {
          result.push(data);
          if (result.length === promiseArray.length) {
            resolve(result);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
const p4 = Promise.resolve(4);
const p5 = Promise.resolve(5);

promiseAll([p1, p2, p3, p4, p5]).then((data) => {
  console.log("data", data);
});
