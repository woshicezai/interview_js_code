// 比较含有退格的字符串，"<-"代表退格键，"<"和"-"均为正常字符
// 输入："a<-b<-", "c<-d<-"，结果：true，解释：都为""
// 输入："<-<-ab<-", "<-<-<-<-a"，结果：true，解释：都为"a"
// 输入："<-<ab<-c", "<<-<a<-<-c"，结果：false，解释："<ac" !== "c"

function fn(str1, str2) {
  function trim_arrow(str, isDouble = false) {
    const compare_str = isDouble ? "<-<-" : "<-";
    const del_len = isDouble ? 2 : 1;
    let str_copy = str;
    let pos = str_copy.indexOf(compare_str);
    if (pos > -1) {
      const split_start = Math.max(pos - del_len, 0);
      if (split_start === 0) {
        str_copy = str_copy.substring(compare_str.length + pos - 1);
      } else {
        str_copy =
          str_copy.substring(0, split_start) +
          str_copy.substring(split_start + compare_str.length + 1);
      }

      return trim_arrow(str_copy, isDouble);
    } else {
      return str_copy;
    }
  }

  const once = trim_arrow(trim_arrow(str1, true));
  const twice = trim_arrow(trim_arrow(str2, true));
  return once === twice;
}
const start_time_1 = Date.now();
console.log(fn("a<-b<-", "c<-d<-"));
console.log(fn("<-<-ab<-", "<-<-<-<-a"));
console.log(fn("<-<ab<-c", "<<-<a<-<-c"));
console.log("fn1", Date.now() - start_time_1);

function fn2(str1, str2) {
  const doDelete = (str) => {
    let flag = 0; // 0 - 正常字符；1 - <；2 - <-
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      stack.push(char);

      if (char === "<" && !flag) {
        flag += 1;
      } else if (flag === 1) {
        if (char === "-") {
          flag += 1;
        } else {
          flag -= 1;
        }
      }

      if (flag === 2) {
        stack.pop();
        stack.pop();
        stack.pop();
        flag = 0;
      }
    }
    // console.log(String(stack))
    return String(stack);
  };

  return doDelete(str1) === doDelete(str2);
}

const start_time_2 = Date.now();
console.log(fn2("a<-b<-", "c<-d<-"));
console.log(fn2("<-<-ab<-", "<-<-<-<-a"));
console.log(fn2("<-<ab<-c", "<<-<a<-<-c"));
console.log("fn2", Date.now() - start_time_2);
