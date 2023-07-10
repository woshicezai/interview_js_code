/**
 * 暴力解法
 * @param {*} value
 * @returns
 */
function isRepeat(value) {
  let start = 0;
  for (let end = 1; end < value.length; end++) {
    let result = true;
    const sub = value.slice(start, end);
    for (let j = end; j < value.length; ) {
      if (value.slice(j, j + end - start) !== sub) {
        result = false;
        break;
      }
      j += end - start;
    }

    if (result) {
      return result;
    }
  }
  return false;
}

// console.log(isRepeat("abab"));
// console.log(isRepeat("aba"));
// console.log(isRepeat("abcabcabcabc"));

/**
 * 将字符串相加，看中间是否有一个 s
 * @param {*} value
 */
function iRepeat_2(value) {
  const double_value = value.slice(1) + value.slice(0, value.length - 2);
  return double_value.indexOf(value) > -1;
}

console.log(iRepeat_2("abab"));
console.log(iRepeat_2("aba"));
console.log(iRepeat_2("abcabcabcabc"));

/**
 * KMP next 数组
 * @param {*} pattern
 */
function getNext(pattern) {
  let j = 0;
  const next = [0];

  for (let i = 1; i < pattern.length; i++) {
    while (j > 0 && pattern[j] !== pattern[i]) {
      j = next[j - 1];
    }
    if (pattern[j] === pattern[i]) {
      j++;
    }
    next.push(j);
  }
  return next;
}

/**
 * 通过 kmp 找到字符串最后一位的最长匹配字符串的长度，
 * @param {} value
 * @returns
 */
function isRepeat_kmp(value) {
  const next = getNext(value);
  const lastNextValue = next[next.length - 1];
  return value.length % (value.length - lastNextValue) === 0;
}

console.log(isRepeat_kmp("abab"));
console.log(isRepeat_kmp("aba"));
console.log(isRepeat_kmp("abcabcabcabc"));
