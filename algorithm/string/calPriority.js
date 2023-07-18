/**
 *
 * @param {*} content
 */
function transform(content) {
  const fuhao = ["+", "-", "*", "/"];
  const stack = [];
  const node = {
    value: null,
    opetator: "",
  };

  let currentNumber = "";
  for (let i = 0; i < content.length; i++) {
    const fuhao_index = fuhao.indexOf(content[i]);
    const isFuhao = fuhao_index > -1;
    if (!isFuhao) {
      currentNumber += content[i];
      if (i === content.length - 1) {
        stack.push({
          value: currentNumber,
          opetator: "",
        });
        currentNumber = "";
      }
    } else if (isFuhao) {
      stack.push({
        value: currentNumber,
        opetator: content[i],
      });
      currentNumber = "";
    }
  }

  return stack.reduce((str, item, index) => {
    if (index === 0) {
      str = `${item.value}${item.opetator}`;
    } else {
      const pre = stack[index - 1];
      //左高右低：右括号
      if (fuhao.indexOf(pre.opetator) > 1 && fuhao.indexOf(item.opetator) < 2) {
        str += `${item.value})${item.opetator}`;
      } else if (
        //左低右高：左括号
        fuhao.indexOf(pre.opetator) < 2 &&
        fuhao.indexOf(item.opetator) > 1
      ) {
        str += `(${item.value}${item.opetator}`;
      } else {
        str += `${item.value}${item.opetator}`;
      }
    }
    return str;
  }, "");
}

console.log(transform("11+2-3*4+5/2*4+10/5"));
