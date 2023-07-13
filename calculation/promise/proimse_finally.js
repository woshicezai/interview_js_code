Promise.prototype.finally = function (callback) {
  const P = this.constructor;
  // this.then important
  return this.then(
    (value) => P.resolve(callback()).then(() => value), //后面还接着一个 then  important
    (reason) =>
      P.resolve(callback()).then(() => {
        //P.resolve important
        //throw reason important
        throw reason;
      })
  );
};

// Promise.resolve(1)
//   .finally((value) => {
//     console.log("finally", value); //undefined
//   })
//   .then((value) => {
//     console.log("end then", value); //1
//   });
