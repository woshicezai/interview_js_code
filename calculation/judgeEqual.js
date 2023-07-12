//a == 1 && a == 2 && a == 3 可能为 true 吗？
//!! 根据规则，== 左边为对象类型，右边为Number，在比较时会调用 a 的toString方法，

const a = {
  value: 1,
  toString: function () {
    return a.value++;
  },
};

console.log(a == 1 && a == 2 && a == 3);
