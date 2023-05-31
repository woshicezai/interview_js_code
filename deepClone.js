function deepClone(obj, hash = new WeakMap()) {
  if (obj === undefined) {
    return undefined;
  }
  if (typeof obj !== "object") {
    return obj;
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  const isArray = Array.isArray(obj);
  const newObj = isArray ? [] : {};

  hash.set(obj, newObj);

  Object.keys(obj).forEach((key) => {
    newObj[key] = deepClone(obj[key], hash);
  });
  return newObj;
}

const a = {
  b: {
    name: "zc",
    location: {
      city: "bj",
      province: "sjs",
    },
  },
};
a.pre = a;

const b = deepClone(a);
console.log(b);
