/**
 * 层序遍历
 * 广度遍历
 * 利用队列
 * @param {*} node
 * @returns
 */
function horizon_travel(node) {
  const queue = [node];
  const result = [];
  while (queue.length) {
    let size = queue.length;
    const sub_res = [];
    while (size--) {
      const item = queue.shift();
      sub_res.push(item.value);
      item.left && queue.push(item.left);
      item.right && queue.push(item.right);
    }
    result.push(sub_res);
  }
  return result;
}

let node = {
  value: 8,
  left: {
    value: 10,
    left: {
      value: 1,
    },
    right: {
      value: 7,
      left: {
        value: 6,
      },
      right: {
        value: 5,
      },
    },
  },
  right: {
    value: 4,
    left: {
      value: 15,
    },
    right: {
      value: 20,
    },
  },
};

console.log(horizon_travel(node));
