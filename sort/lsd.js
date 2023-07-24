/**
 * 基线排序
 * @param {*} nums
 * @returns
 */
function sort(nums) {
  let result = [...nums];
  const maxDigitCount = result.reduce((max, num) => {
    const digit = getDigit(num);
    if (max < digit) {
      max = digit;
    }
    return max;
  }, 0);

  for (let i = 0; i < maxDigitCount; i++) {
    const temp = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < result.length; j++) {
      const digitValue = getDigitValue(result[j], i) || 0;
      temp[digitValue].push(result[j]);
    }
    result = [].concat(...temp);
  }

  return result;
}

function getDigit(value) {
  if (value === 0) return 1;
  return Math.floor(Math.log10(value)) + 1;
}
function getDigitValue(value, digit) {
  return Math.floor(value / Math.pow(10, digit)) % 10;
}

console.log(sort([23, 345, 5467, 12, 2345, 9852]));
