/**
 * 删除一个节点
 * @param {*} node
 * @param {*} value
 * @returns
 */
function deleteNode(node, value) {
  let newNode = {
    value: null,
    next: node,
  };
  let head = newNode;
  while (head.next && head.next.value !== value) {
    head = head.next;
  }
  if (!head.next) {
    // no this value
    return -1;
  } else {
    const temp = head.next;
    head.next = temp.next;
    temp.next = null;
    return 1;
  }
}

/**
 * 构建一个链表，数值递增
 * @param {*} length
 */
const { generatorLinkList } = require("./utils");
const nodeListGenerator = generatorLinkList();
const node = nodeListGenerator
  .addList(1)
  .addList(2)
  .addList(3)
  .addList(4)
  .addList(5)
  .finish();

console.log(deleteNode(node, 9));
console.log(JSON.stringify(node));
