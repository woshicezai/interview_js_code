function fibonacci(len) {
  let prepre = 0;
  let pre = 1;
  let result = "1";
  for (let i = 1; i < len; i++) {
    const cur = prepre + pre;
    prepre = pre;
    pre = cur;
    result += cur;
  }
  return result;
}

console.log(fibonacci(10));
