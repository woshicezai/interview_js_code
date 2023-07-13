/**
 * 自己写的，判断条件写的不好
 * !! typeof 判断 symbol，如果非object，则都可直接返回。
 * !! 还需要有 hash 避免嵌套循环
 * @param {*} obj
 * @returns
 */
// function deepClone(obj) {
//   //symbol ,function 直接返回自身
//   if (typeof obj === "symbol") {
//     return obj;
//   } else if (obj instanceof Function) {
//     return obj;
//   } else if (Array.isArray(obj)) {
//     return obj.map((item) => deepClone(item));
//   } else if (typeof obj === "object") {
//     const newObj = {};
//     Object.keys(obj).forEach((key) => {
//       newObj[key] = deepClone(obj[key]);
//     });
//     return newObj;
//   } else {
//     return obj;
//   }
// }

function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
