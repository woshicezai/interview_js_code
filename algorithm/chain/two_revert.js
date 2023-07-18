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
  .addList(5)
  .finish();

function revertList(node) {
  let pre = node;
  let cur = node.next;
  let firstNode = cur;

  while (pre && cur) {
    const temp = cur.next;
    cur.next = pre;
    pre.next = (temp && temp.next) || temp; //import
    //往下走
    pre = temp;
    cur = temp?.next;
  }
  return firstNode; //import
}

console.log(JSON.stringify(revertList(node)));
