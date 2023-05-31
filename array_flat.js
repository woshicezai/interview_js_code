function flatArray(array) {
  return array.reduce((result, item) => {
    if (Array.isArray(item)) {
      return result.concat(flatArray(array));
    }
    return result.concat(item);
  }, []);
}

/**
 * 非递归版本
 * @param {*} array
 * @returns
 */
function flat(array) {
  const stack = [...array];
  const result = [];
  while (stack.length) {
    const item = stack.shift();
    if (Array.isArray(item)) {
      stack.unshift(...item); // 关键点
    } else {
      result.push(item);
    }
  }
  return result;
}

const a = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10]]];

console.log(flat(a));
