/**
 * 遍历
 * 迭代/栈 法
 * @param {*} node
 */

/**
 * 前序
 */
function traverse_start(node) {
  const stack = [];
  const output = [];

  if (node) {
    stack.push(node); //important 放的是node，不是value
  }
  function insertStack(node) {
    /**
     * !! 先进后出，所以先右后左，这样弹出就是先左后右
     */
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  while (stack.length) {
    const node = stack.pop();
    insertStack(node);
    output.push(node.value);
  }

  return output;
}

/**
 * 中序
 */
function traverse_middle(node) {
  const stack = [];
  const output = [];

  /**
   * 优先插入所有的左侧节点
   * @param {*} node
   */
  function insertStack(node) {
    let unit = node;
    stack.push(unit);
    while (unit.left) {
      stack.push(unit.left);
      unit = unit.left;
    }
  }

  insertStack(node);

  while (stack.length) {
    const unit = stack.pop();
    output.push(unit.value);
    if (unit.right) {
      insertStack(unit.right);
    }
  }

  return output;
}

/**
 * 后序
 */
function traverse_end(node) {
  const stack = [];
  const output = [];

  /**
   * 优先插入所有的左侧节点
   * @param {*} node
   */
  function insertStack(node) {
    let unit = node;
    stack.push(unit);
    while (unit.left) {
      stack.push(unit.left);
      unit = unit.left;
    }
  }

  insertStack(node);

  while (stack.length) {
    const last = stack.pop();
    if (last.right && !last.isAnalyze) {
      last.isAnalyze = true;
      stack.push(last);
      insertStack(last.right);
    } else {
      output.push(last.value);
    }
  }

  return output;
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

console.log("前序", traverse_start(node));
console.log("中序", traverse_middle(node));
console.log("后序", traverse_end(node));
