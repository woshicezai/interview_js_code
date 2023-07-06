/**
 * 环形链表，找到环形的入口节点
 * @param {*} node
 */
function circleLinkList(node) {
  let fast = node;
  let slow = node;

  let findEntry1 = null;
  let findEntry2 = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      findEntry1 = node;
      findEntry2 = slow;
      fast = slow = null;
      while (findEntry1 !== findEntry2) {
        findEntry1 = findEntry1.next;
        findEntry2 = findEntry2.next;
      }
    }
  }
  return findEntry1;
}

/**
 * 构建一个链表，数值递增
 * @param {*} length
 */
let node1 = { value: 1, next: null };
let node2 = { value: 2, next: null };
let node3 = { value: 3, next: null };
let node4 = { value: 4, next: null };
let node5 = { value: 5, next: null };
let node6 = { value: 6, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node1;

const circleEntry = circleLinkList(node1);
console.log(circleEntry.value);
