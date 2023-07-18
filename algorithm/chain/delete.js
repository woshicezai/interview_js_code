/**
 * 删除链表的倒数第N个节点
 * 操作目标节点的上个节点
 * 快慢节点
 */
function deleteNodeFromLast(node, index) {
  //import
  const nullNode = {
    value: null,
    next: node,
  };
  let fast = nullNode,
    slow = nullNode;

  //fast 先单独移动
  while (index--) {
    fast = fast.next;
  }
  //fast,slow 开始同时移动,直到 fast 到尾部
  while (fast.next) {
    fast = fast.next; //import
    slow = slow.next; //import
  }

  const deleteNode = slow.next;
  slow.next = deleteNode.next;
  deleteNode.next = null;
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

deleteNodeFromLast(node, 2);
console.log(JSON.stringify(node));
