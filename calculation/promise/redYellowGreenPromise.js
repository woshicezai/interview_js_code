function light(fn, timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, timeout);
  });
}

function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

function generateChain() {
  return light(red, 3000)
    .then(() => {
      return light(yellow, 2000);
    })
    .then(() => {
      return light(green, 1000);
    })
    .then(() => {
      return generateChain();
    });
}

generateChain();
