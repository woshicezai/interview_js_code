/**
 * 希尔排序：优化后的插入排序
 * 多了一个动态变化的间隔
 * @param {*} arr
 */
function shell(arr) {
  let step = parseInt(arr.length / 2);

  while (step) {
    //i++ important
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

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
shell(arr);
console.log(arr); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
