/**
 * 前中后遍历
 * recursion 形式
 */

const treeNode = {
  left: null,
  right: null,
  value: null,
};

/**
 * 前序遍历：中左右
 */
function traverse_start(node, output = []) {
  if (!node) {
    return;
  }
  output.push(node.value); //中
  traverse_start(node.left, output); //左
  traverse_start(node.right, output); //右
}

/**
 * 中序遍历：左中右
 */
function traverse_middle(node, output = []) {
  if (!node) {
    return;
  }
  traverse_middle(node.left, output); //左
  output.push(node.value); //中
  traverse_middle(node.right, output); //右
}

/**
 * 后序遍历：左右中
 */
function traverse_end(node, output = []) {
  if (!node) {
    return;
  }
  traverse_end(node.left, output); //左
  traverse_end(node.right, output); //右
  output.push(node.value); //中
}
const node = {
  value: 1,
  right: {
    value: 3,
    right: {
      value: 7,
      right: {
        value: 10,
      },
    },
    left: {
      value: 6,
      left: {
        value: 9,
      },
    },
  },
  left: {
    value: 2,
    right: {
      value: 5,
    },
    left: {
      value: 4,
      left: {
        value: 8,
      },
    },
  },
};

const output = [];
const output1 = [];
const output2 = [];
traverse_start(node, output);
console.log("前序", output);

traverse_middle(node, output1);
console.log("中序", output1);

traverse_end(node, output2);
console.log("后序", output2);
