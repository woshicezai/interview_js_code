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

function revertList(node) {
  let pre = null;
  let cur = node;

  while (cur) {
    const temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre; //import
}

// console.log(JSON.stringify(revertList(node)));

/**
 * 递归写法
 * 也是依照双指针逻辑写
 * @param {*} cur
 * @param {*} pre
 */
function revertRecursion(cur, pre) {
  if (!cur) {
    return pre;
  }
  const temp = cur.next;
  cur.next = pre;
  return revertRecursion(temp, cur);
}

console.log(JSON.stringify(revertRecursion(node)));
