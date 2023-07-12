function merge(arr) {
  const len = arr.length;
  let slow = 0;
  let startPoint = 0;
  for (let fast = 1; fast < len; fast++) {
    while (arr[fast - 1] + 1 !== arr[fast]) {
      arr[slow] =
        fast - startPoint > 1
          ? `${arr[startPoint]}->${arr[fast - 1]}`
          : arr[startPoint];

      slow++;
      startPoint = fast;
      break; //important
    }
  }

  //尾部边界处理
  const leftLen = len - startPoint;
  arr[slow] =
    leftLen > 1 ? `${arr[startPoint]}->${arr[len - 1]}` : arr[len - 1];

  //更新处理后的长度
  arr.length = slow + 1;
}

//[1,2,3,4,6,7,9,13,15]=>['1->4','6->7','9','13','15']
const arr = [1, 2, 3, 4, 6, 7, 9, 13, 15];
merge(arr);
console.log(arr);
