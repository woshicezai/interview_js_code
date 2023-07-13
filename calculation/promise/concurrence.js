function concurrence(fn_promise, maxLimit) {
  return function (urls) {
    let pos = 0;
    function getUrl() {
      return urls[pos++];
    }

    const result = [];
    function fetchNext(url, resovle) {
      fn_promise(url).then((data) => {
        result.push(data);
        const url = getUrl();
        if (url) {
          return fetchNext(url, resovle);
        }
        if (result.length === urls.length) {
          resovle(result);
        }
      });
    }

    return new Promise((resovle) => {
      const len = Math.min(maxLimit, urls.length);
      for (let i = 0; i < len; i++) {
        fetchNext(getUrl(), resovle);
      }
    });
  };
}

var timeouts = [1000, 400, 300, 400, 600, 800];

function loadTime(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("setTimeout", timeout);
      resolve(timeout);
    }, timeout);
  });
}

const limitLoadImg = concurrence(loadTime, 5);
const start = Date.now();
limitLoadImg(timeouts).then((data) => {
  console.log("全部运行结束", data, Date.now() - start);
});
