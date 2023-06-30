/**
 * 将数组每个元素都进行平方，然后返回递增的数组
 * @param {*} arr
 */
function getSquareResult(arr) {
  const resultArr = [];
  let kPos = arr.length - 1;
  for (let leftPos = 0, rightPos = arr.length - 1; leftPos <= rightPos; ) {
    const p_leftValue = pow(arr[leftPos]);
    const p_rightValue = pow(arr[rightPos]);
    if (p_leftValue < p_rightValue) {
      resultArr[kPos--] = p_rightValue;
      rightPos--;
    } else {
      resultArr[kPos--] = p_leftValue;
      leftPos++;
    }
  }
  return resultArr;
}

function pow(value) {
  return Math.pow(value, 2);
}

const arr = [-5, -4, -1, 1, 2, 3, 4, 5, 6];

console.log(getSquareResult(arr));
