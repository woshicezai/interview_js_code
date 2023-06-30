/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。
 * 如果不存在符合条件的子数组，返回 0。
 * 滑动窗口解法
 */
function minSubArrayLen(arr, target) {
  let min_distanth = Infinity;
  let sum = 0;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    //while import
    while (sum >= target) {
      min_distanth = Math.min(min_distanth, j - i + 1);
      sum -= arr[i];
      i++;
    }
  }
  return min_distanth === Infinity ? 0 : min_distanth;
}

const nums = [2, 3, 1, 2, 4, 3];
console.log(solution(nums, 7));
