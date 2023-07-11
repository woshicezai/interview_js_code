/**
 * 计算平均时间
 */
const times = ["8:15", "6:35", "11:22"];

const average_time = (times) => {
  //转换为总的分钟
  const all_mins = times.reduce((sum, item) => {
    const [hour, min] = item.split(":").map((item) => item - 0);
    return sum + hour * 60 + min;
  }, 0);

  const average_mins = Math.floor(all_mins / times.length);

  const average_hour = Math.floor(average_mins / 60);
  const average_min = average_mins - average_hour * 60;

  return `${average_hour}:${average_min}`;
};

console.log(average_time(times));
