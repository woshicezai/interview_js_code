// 题目需求
let middleware = [];
middleware.push((next) => {
  console.log(1);
  next();
  console.log(1.1);
});
middleware.push((next) => {
  console.log(2);
  next();
  console.log(2.1);
});
middleware.push((next) => {
  console.log(3);
  next();
  console.log(3.1);
});

let fn = compose(middleware);
fn();

/*
1
2
3
3.1
2.1
1.1
*/

//实现compose函数
function compose(middlewares) {
  function next_wrapper(index) {
    return function next() {
      const nextFunc = middlewares[index + 1];
      if (nextFunc) {
        nextFunc(next_wrapper(index + 1));
      }
    };
  }
  return function () {
    middlewares[0](next_wrapper(0));
  };
}
