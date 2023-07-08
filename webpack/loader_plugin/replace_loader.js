module.exports = function (source) {
  const result = source.replace(/foo/g, "bar");
  return result;
};
