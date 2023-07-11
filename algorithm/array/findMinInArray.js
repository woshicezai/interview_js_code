function findMinInArray(arr) {
  let min = Infinity;
  let min_index = -1;
  arr.forEach((item, index) => {
    if (item < min) {
      min = item;
      min_index = index;
    }
  });
  return min_index;
}

console.log(findMinInArray([4, 5, 6, 1, 2, 3, 7, 8, 9]));
