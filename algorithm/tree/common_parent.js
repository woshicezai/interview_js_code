function lowestCommonAncestor(root, p, q) {
  // 使用递归的方法
  // 需要从下到上，所以使用后序遍历
  // 1. 确定递归的函数
  const travelTree = function (root, p, q) {
    // 2. 确定递归终止条件
    if (!root || root.value === p || root.value === q) {
      return root;
    }
    // 3. 确定递归单层逻辑
    let left = travelTree(root.left, p, q);
    let right = travelTree(root.right, p, q);
    if (left && right) {
      return root;
    }
    if (!left) {
      return right;
    }
    return left;
  };
  return travelTree(root, p, q);
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

console.log(lowestCommonAncestor(node, 6, 5).value);

function common_parent(node, p, q) {
  function travel(node, p, q) {
    if (!node || node.value === p || node.value === q) {
      return node;
    }
    const left = travel(node.left, p, q);
    const right = travel(node.right, p, q);

    if (left && right) {
      return node;
    }
    if (!left) {
      return right;
    }
    return left;
  }
  return travel(node, p, q);
}

console.log(common_parent(node, 6, 5).value);
