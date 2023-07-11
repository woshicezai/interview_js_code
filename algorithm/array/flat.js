function flat(arr) {
  const result = arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flat(item));
    } else {
      result.push(item);
    }
    return result;
  }, []);
  return result;
}

let res1 = flat([1, 2, 3, [4, 5, [6, 7]], 8]); //参数3代表三维数组的展开，结果为[1,2,3,4,5,6,7,8]
console.log(res1);
let res2 = flat([1, 2, 3, [4, 5, [6, 7, [8]]], 9]); //参数4代表思维数组的展开，结果为[1,2,3,4,5,6,7,8,9]
console.log(res2);
