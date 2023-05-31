function Father() {}

Father.prototype.getName = function () {
  return this.name;
};
function Son() {
  this.name = "son";
}

Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;

const son = new Son();
console.log(son.getName(), son instanceof Son, son instanceof Father);

// class MyDate extends Date {
//   test() {
//     return this.getTime();
//   }
// }
// let myDate = new MyDate();

function MyData() {}
MyData.prototype.test = function () {
  return this.getTime();
};
let d = new Date();
Object.setPrototypeOf(d, MyData.prototype);
Object.setPrototypeOf(MyData.prototype, Date.prototype);

console.log(d.test());
