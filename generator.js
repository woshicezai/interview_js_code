// cb 也就是编译过的 test 函数
function generator(cb) {
  return (function () {
    var object = {
      next: 0,
      stop: function () {},
    };
    return {
      next: function () {
        var ret = cb(object);
        if (ret === undefined) return { value: undefined, done: true };
        return {
          value: ret,
          done: false,
        };
      },
    };
  })();
}

// 如果你使用 babel 编译后可以发现 test 函数变成了这样
function test() {
  var a;
  return generator(function (_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        // 可以发现通过 yield 将代码分割成几块 // 每次执行 next 函数就执行一块代码
        // 并且表明下次需要执行哪块代码
        case 0:
          a = 1 + 2;
          _context.next = 4;
          return 2;
        case 4:
          _context.next = 6;
          return 3;
        // 执行完毕
        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

// function* test() {
//   let a = 1 + 2;
//   yield 2;
//   yield 3;
// }

// const g = test();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

function asyncOperation(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 1);
    }, 1000);
  });
}

function* generatorAsync() {
  const result1 = yield asyncOperation(1);
  const result2 = yield asyncOperation(result1);
  const result3 = yield asyncOperation(result2);
  console.log(result3); // 输出 4
}

function run(generator) {
  const iterator = generator();
  //自动执行.next 这个方法
  function processNext(result) {
    if (!result.done) {
      result.value.then((value) => {
        processNext(iterator.next(value));
      });
    }
  }

  processNext(iterator.next());
}

// run(generatorAsync);

function* complexGenerator(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const item = arr[i];

    if (item % 2 === 0) {
      yield item;
    } else {
      const double = yield item * 2;

      if (double > 10) {
        return double;
      }
    }
  }
}

const cTest = complexGenerator([2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2]);
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
console.log(cTest.next());
