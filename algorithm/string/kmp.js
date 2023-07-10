/**
 * next 里的每个元素都是当前索引的模式串的头尾最大相等字符串的长度
 */
function getNext(needle) {
  let next = [];
  let j = 0;
  next.push(j);

  for (let i = 1; i < needle.length; ++i) {
    //while important
    while (j > 0 && needle[i] !== needle[j]) j = next[j - 1];
    if (needle[i] === needle[j]) j++;
    next.push(j);
  }

  return next;
}

// const pattern = "agctagcagctagct";
const pattern = "abababab";
const lps = getNext(pattern);
console.log("Partial Match Table (LPS):", lps);

/**
 * a  g  c  t  a  g  c  a  g  c  t  a  g  c  t
 * 0, 0, 0, 0, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 4;
 *
 */

var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  let next = getNext(needle);
  let j = 0;
  for (let i = 0; i < haystack.length; ++i) {
    //while important
    while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1];
    if (haystack[i] === needle[j]) j++;
    if (j === needle.length) return i - needle.length + 1;
  }

  return -1;
};

// console.log(strStr("aabaabaafa", "aabaaf"));
