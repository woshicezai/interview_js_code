/**
 * @file 合并两个有序数组
 */
function merge(arr: number[], arr2: number[]): number[] {
  // 补全此处代码
  let first_index = 0;
  let second_index = 0;

  const res: number[] = [];
  while (first_index < arr.length && second_index < arr2.length) {
    if (arr[first_index] < arr2[second_index]) {
      res.push(arr[first_index]);
      first_index++;
    }
    if (arr[first_index] > arr2[second_index]) {
      res.push(arr2[second_index]);
      second_index++;
    }
    if (arr[first_index] === arr2[second_index]) {
      res.push(arr[first_index]);
      res.push(arr2[second_index]);
      first_index++;
      second_index++;
    }
  }
  if (first_index === arr.length) {
    res.push(...arr2.slice(second_index));
  }
  if (second_index === arr2.length) {
    res.push(...arr.slice(first_index));
  }
  return res;
}

// function merge(arr: number[], arr2: number[]): number[] {
//   return arr.concat(arr2).sort();
// }
// 参数数组从小到大排列
console.log(merge([1, 2, 3], [2, 5, 6])); // [ 1, 2, 2, 3, 5, 6 ]

export default {};
