/**
 * 
 * @param {*} func 
 * @param  {...any} args 
 * @returns 
 * 先理清楚 new 关键字调用函数都的具体过程，那么写出来就很清楚了
首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象
把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象
如果构造函数返回一个非基本类型的值，则返回这个值，否则上面创建的对象
 */
function _new(func, ...args) {
  const obj = Object.create(func.prototype);
  const res = func.apply(obj, args);
  return res instanceof Object ? res : obj;
}

function T() {
  this.name = "test";
  return {
    name: "lll",
  };
}

const t = new T();
console.log(t);
