/**
 * 插入算法
 * 增序
 * !! 冒泡算法是相邻两个对比
 * !! 插入算法是目标元素和前面元素分别对比
 * @param {*} arr
 */
function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    const targetValue = arr[i];
    let pre = i - 1;
    while (pre > -1 && targetValue < arr[pre]) {
      //important
      arr[pre + 1] = arr[pre];
      pre--;
    }
    //important
    arr[pre + 1] = targetValue;
  }
}
console.time("insert");
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
insert(arr);
console.timeEnd("insert");
console.log(arr); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

/**
 * 希尔排序：优化后的插入排序
 * 多了一个动态变化的间隔
 * @param {*} arr
 */
function shell(arr) {
  let step = parseInt(arr.length / 2);

  while (step) {
    for (let i = step; i < arr.length; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= step && arr[j - step] > temp) {
        arr[j] = arr[j - step];
        j -= step;
      }
      arr[j] = temp;
    }

    if (step === 2) {
      step = 1;
    } else {
      step = parseInt((step * 5) / 11);
    }
  }
}

console.time("shell");
var arr1 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
shell(arr1);
console.timeEnd("shell");
console.log(arr1); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
