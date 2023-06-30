Promise.prototype.finally = function (callback) {
  const P = this.constructor;
  return this.then(
    (value) => P.resolve(callback()).then(() => value),
    (reason) =>
      P.resolve(callback()).then(() => {
        throw reason;
      })
  );
};

// try {
//   Promise.reject("this is a erorr")
//     .catch((e) => {
//       console.log("catch", e);
//       return e;
//     })
//     .finally(() => {
//       console.log("finally");
//       return "finally end";
//     })
//     .then((res) => {
//       console.log("after finally then", res);
//     });
// } catch (e) {
//   console.log("try catch", e);
// }
