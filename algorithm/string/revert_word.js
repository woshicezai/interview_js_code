/**
 * 反转单词,去掉多余空格
 * hello world 输出 world hello
 */

/**
 * 该实现依赖了 js string 的 api
 * @param {*} str
 * @returns
 */
function revertWord(str) {
  //   const str_arr = str.split(" ").filter((item) => item);
  const str_arr = removeUnusedSpaceInWord(str).split(" ");
  revertArr(str_arr);
  return str_arr.join(" ");
}

function revertArr(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function removeUnusedSpaceInWord(str) {
  let new_str = "";
  for (let fast = 0; fast < str.length; fast++) {
    const value = str[fast];
    if (value === " " && !new_str) {
      continue;
    } else if (new_str[new_str.length - 1] === " " && value === " ") {
      continue;
    } else if (str[fast + 1]) {
      new_str += value;
    }
  }
  return new_str;
}

console.log(revertWord("    hello     world "));
