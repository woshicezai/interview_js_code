/**
 * 删除数组里的某个元素,并返回数组长度
 * 删除的本质是覆盖操作
 */

function delItemInArray(arr, value) {
  let slow = 0;
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== value) {
      arr[slow++] = arr[fast];
    }
  }
  arr.length = slow;
  return slow;
}

const arr = [1, 2, 3, 4, 3, 5, 6, 3, 5, 8, 9];

console.log(arr.length, delItemInArray(arr, 3), arr);
