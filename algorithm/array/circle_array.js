/**
 *  给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 */
function circleArray(number) {
  let start = 0;
  let count = 1;
  const result = new Array(number).fill().map(() => new Array(number).fill(0));
  //循环次数：向下取整
  for (let time = 0; time < Math.floor(number / 2); time++) {
    //上边
    for (let j = start; j < number - 1 - time; j++) {
      result[start][j] = count++;
    }
    //右边
    for (let i = time; i < number - 1 - time; i++) {
      result[i][number - 1 - time] = count++;
    }
    //下边
    for (let j = number - 1 - time; j > time; j--) {
      result[number - 1 - time][j] = count++;
    }

    //左边
    for (let i = number - 1 - time; i > time; i--) {
      result[i][time] = count++;
    }
    start++;
  }

  //奇数
  if (number % 2 === 1) {
    const center_pos = Math.floor(number / 2);
    result[center_pos][center_pos] = count;
  }

  return result;
}

// 输入: 3 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
console.log(circleArray(4));
