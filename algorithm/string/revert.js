/**
 * 反转字符串
 * !! JavaScript中的字符串是不可变的（immutable）
 * @param {*} value:字符串数组
 */
function revertString(value) {
  let startIndex = 0;
  let endIndex = value.length - 1;

  while (startIndex < endIndex) {
    let startValue = value[startIndex];
    let endValue = value[endIndex];
    value[endIndex] = startValue;
    value[startIndex] = endValue;
    startIndex++;
    endIndex--;
  }
}

let a = "1234567890";

let a_array = a.split("");
revertString(a_array);
console.log(a_array.join(""), a);
