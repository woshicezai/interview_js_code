const arr = [
  ["A", "B"],
  ["a", "b"],
  [1, 2],
];

/**
 * 自己写的一个方法
 * @param {*} arr
 * @returns
 */
function flat(arr) {
  function deep(arr1, arr2) {
    const results = [];
    arr1.forEach((item1) => {
      arr2.forEach((item2) => {
        results.push(item1 + item2);
      });
    });
    return results;
  }

  let results = arr[0];
  for (let i = 1; i < arr.length; i++) {
    results = deep(results, arr[i]);
  }

  return results;
}

const start_time_0 = Date.now();
console.log(flat(arr));
console.log("flat", Date.now() - start_time_0);

function arrange(arr) {
  const results_times = Math.pow(2, arr.length);
  const result = [];
  for (let i = 0; i < results_times; i++) {
    const bit_arr = transform(i, 2, arr.length);
    result[i] = [arr[0][bit_arr[0]], arr[1][bit_arr[1]], arr[2][bit_arr[2]]];
  }

  return result;
}

function transform(value, jinzhi, length) {
  function getzhengshu(value, jinzhi) {
    const zhengshu = Math.floor(value / jinzhi);
    const yushu = value - zhengshu * jinzhi;
    return [zhengshu, yushu];
  }

  let stack = [];
  function getT(value, jinzhi) {
    const [zhengshu, yushu] = getzhengshu(value, jinzhi);
    stack.push(yushu);
    if (value !== 0) getT(zhengshu, jinzhi);
  }
  getT(value, jinzhi);
  stack = stack.reverse();
  return new Array(length).fill(0).map((item, index) => {
    const pos = index + stack.length - length;
    pos > -1 && (item = stack[pos]);
    return item;
  });
}
const start_time_1 = Date.now();
console.log(arrange(arr));
console.log("fn1", Date.now() - start_time_1);

/**
 * 动态规划，下一次的结果，依赖上一次的结果
 * @param {array} arr
 * const arr = [
  ["A", "B"],
  ["a", "b"],
  [1, 2],
];
 */
function permutate(arr) {
  // 第一次的结果就是二维数组的第0项
  let res = arr[0].slice();

  for (let i = 1; i < arr.length; i++) {
    const pre = res.slice();
    res = [];
    pre.forEach((item) => {
      arr[i].forEach((curr) => {
        res.push(item + curr);
      });
    });
  }
  return res;
}
const start_time_2 = Date.now();
console.log(permutate(arr));
console.log("fn2", Date.now() - start_time_2);
