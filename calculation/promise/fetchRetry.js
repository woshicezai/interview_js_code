function mockFetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 2000);
  });
}

function fetchWithRetry(url, maxTimes = 3) {
  return new Promise((resolve, reject) => {
    mockFetch(url)
      .then((value) => {
        resolve(value);
      })
      .catch((err) => {
        if (maxTimes === 0) {
          reject(err);
        } else {
          return fetchWithRetry(url, maxTimes - 1);
        }
      });
  });
}
