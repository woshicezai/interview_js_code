/**
 * 反转链表
 */

const { generatorLinkList } = require("./utils");

/**
 * 构建一个链表，数值递增
 * @param {*} length
 */
const nodeListGenerator = generatorLinkList();
const node = nodeListGenerator
  .addList(1)
  .addList(2)
  .addList(3)
  .addList(4)
  .finish();
console.log(node);

function revertList(node) {
  let pre = null;
  let cur = node;

  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return node;
}

console.log(revertList(node));
