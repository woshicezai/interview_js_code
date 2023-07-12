/**
 * 实现一个jsonp
 */

function jsonp(url, callback) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.url = `${url}?callback=${callback}`;
    document.body.appendChild(script);
    window[callback] = (data) => {
      resolve(data);
      document.body.removeChild(script);
    };
  });
}
