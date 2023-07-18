/**
 * 二分法
 * 数组是有序递增
 */

//左闭右闭
function findPosition(arr, target) {
  let left = 0,
    right = arr.length - 1;
  let middle_index;
  //important
  while (left <= right) {
    middle_index = Math.floor((left + right) / 2);
    const value = arr[middle_index];
    if (value > target) {
      right = middle_index - 1; //important
    } else if (value < target) {
      left = middle_index + 1; //important
    } else {
      return middle_index;
    }
  }
  return -1;
}

//左闭右开
function findPosition_2(arr, target) {
  let left = 0,
    right = arr.length;
  let middle_index;
  //important
  while (left < right) {
    middle_index = Math.floor((left + right) / 2);
    const value = arr[middle_index];
    if (value > target) {
      right = middle_index; //important
    } else if (value < target) {
      left = middle_index + 1; //important
    } else {
      return middle_index;
    }
  }
  return -1;
}

const arr = [2, 3, 4, 5, 6, 7, 9, 10];
console.log(findPosition_2(arr, 7));
