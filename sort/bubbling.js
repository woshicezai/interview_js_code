/**
 * 冒泡算法
 */
function bubbling(arr) {
  const end = arr.length - 1;
  for (let i = 0; i < end; i++) {
    for (let j = 0; j < end - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time("耗时");
bubbling(arr);
console.timeEnd("耗时");
console.log(arr);

/**
 * 同时前后冒泡，一个向后最大值，一个向前最小值
 * @param {*} arr
 */
function bubbleSort3(arr) {
  var low = 0;
  var high = arr.length - 1; //设置变量的初始值
  var tmp, j;
  while (low < high) {
    for (
      j = low;
      j < high;
      ++j //正向冒泡,找到最大者
    )
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    --high; //修改high值, 前移一位
    for (
      j = high;
      j > low;
      --j //反向冒泡,找到最小者
    )
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    ++low; //修改low值,后移一位
  }
}

var arr3 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time("耗时3");
bubbleSort3(arr3); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.timeEnd("耗时3");
console.log(arr3);
