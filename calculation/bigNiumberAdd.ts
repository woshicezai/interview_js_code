function add(a: string, b: string) {
  const len = Math.max(a.length, b.length);

  const a_arr = fillZero(a, len).split("");
  const b_arr = fillZero(b, len).split("");

  let go = 0;
  const result: number[] = [];
  for (let i = len - 1; i > -1; i--) {
    let sum = parseInt(a_arr[i]) + parseInt(b_arr[i]) + go;
    if (sum > 9) {
      go = 1;
      sum -= 10;
    } else {
      go = 0;
    }
    result.unshift(sum);
  }
  if (go === 1) {
    result.unshift(go);
  }
  return result.join("");
}

function fillZero(bigNumber: string, len: number) {
  if (bigNumber.length >= len) {
    return bigNumber;
  }
  return new Array(len - bigNumber.length).fill(0).join("") + bigNumber;
}

console.log(add("9007199254740991", "98014398509481982")); //27021597764222973
