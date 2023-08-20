function co(genFunc) {
  const gen = genFunc();

  return new Promise((resolve, reject) => {
    function step(params) {
      let result;
      try {
        result = gen.next(params);
      } catch (error) {
        return reject(error);
      }

      const { value, done } = result;

      if (done) {
        return resolve(value);
      } else {
        return Promise.resolve(value).then(
          (v) => step(v),
          (e) => reject(e)
        );
      }
    }
    return step();
  });
}
co(function* () {
  const data1 = yield Promise.resolve(1);
  const data2 = yield Promise.resolve(2);
  console.log(data1, data2);
}).catch(console.error);
