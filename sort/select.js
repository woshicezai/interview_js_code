/**
 * 选择排序
 * 升序
 */
function select(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = Infinity;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
select(arr);
console.log(arr); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
