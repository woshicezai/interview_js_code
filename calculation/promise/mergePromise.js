// function mergePromise(fetchs) {
//   let pos = 0;
//   const result = [];
//   function getNext(value, resolve) {
//     if (typeof value !== "undefined") {
//       result.push(value);
//     }
//     const fetch = fetchs[pos++];
//     if (fetch) {
//       return fetch().then((data) => {
//         getNext(data, resolve);
//       });
//     }
//     if (result.length === fetchs.length) {
//       return resolve(result);
//     }
//   }

//   return new Promise((resolve) => {
//     getNext().then((data) => {
//       getNext(data, resolve);
//     });
//   });
// }

function mergePromise(ajaxArray) {
  let promise = Promise.resolve();
  const result = [];
  ajaxArray.forEach((ajax) => {
    //!! important
    promise = promise.then(ajax).then((res) => {
      result.push(res);
    });
  });
  return promise.then(() => {
    return result;
  });
}

const time = (timer) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};
const ajax1 = () =>
  time(2000).then(() => {
    console.log(1);
    return 1;
  });
const ajax2 = () =>
  time(1000).then(() => {
    console.log(2);
    return 2;
  });
const ajax3 = () =>
  time(1000).then(() => {
    console.log(3);
    return 3;
  });

mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
