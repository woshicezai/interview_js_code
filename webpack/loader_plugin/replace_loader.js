module.exports = function (source) {
  console.log("loader", source);
  const result = source.replace(/foo/g, "bar");
  return result;
};
