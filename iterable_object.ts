let info = {
  bears: ["ice", "panda", "grizzly"],
  [Symbol.iterator]: function () {
    let pos = 0;
    return {
      next: function () {
        const isDone = pos > info.bears.length - 1;
        return { value: info.bears[pos++], done: isDone };
      },
    };
  },
};

for (let value of info) {
  console.log(value);
}
