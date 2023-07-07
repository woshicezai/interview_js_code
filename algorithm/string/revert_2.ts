/**
 * 题目说明：
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起, 每计数至 2k 个字符，就反转这 2k 个字符中的前 k 个字符。
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * 示例:
 * 输入: s = "abcdefg", k = 2
 * 输出: "bacdfeg"
 */

function revertString2(value: string[], k: number) {
  let start_index = 0;
  let len = value.length;

  while (start_index + 2 * k <= len) {
    //<=2k
    revert(value, start_index, k);
    start_index += 2 * k;
  }
  //>k;
  if (start_index + 1 + k <= len) {
    revert(value, start_index, k);
  } else {
    //<k
    revert(value, start_index, len - start_index);
  }
}

/**
 * @param value
 */
function revert(value: string[], start: number, len: number) {
  let start_index = start;
  let end_index = start + len - 1;

  while (start_index < end_index) {
    [value[end_index], value[start_index]] = [
      value[start_index],
      value[end_index],
    ];
    start_index++;
    end_index--;
  }
}

export {};

/**
 * 测试代码
 */
const a: string = "abcdefghijklmn";

const a_rr = a.split("");
revertString2(a_rr, 3);
console.log(a_rr.join(""));
