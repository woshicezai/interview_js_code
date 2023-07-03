/**
 * 构建一个链表，数值递增
 * @param {*} length
 */

module.exports = {
  generatorLinkList() {
    //虚拟头部
    let startpoint = {
      value: null,
      next: null,
    };
    return {
      addList(value) {
        let pos = startpoint;
        while (pos.next) {
          pos = pos.next;
        }
        pos.next = {
          value,
          next: null,
        };
        return this;
      },
      finish() {
        return startpoint.next;
      },
    };
  },
};
