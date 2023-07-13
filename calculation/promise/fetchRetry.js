function mockFetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000);
  });
}

function fetchWithRetry(url, maxTimes = 3) {
  return new Promise((resolve, reject) => {
    if (maxTimes === 0) {
      throw "fail more than maxTimes";
    }
    mockFetch(url)
      .then((value) => {
        resolve(value);
      })
      .catch((err) => {
        return fetchWithRetry(url, maxTimes - 1);
      });
  });
}
