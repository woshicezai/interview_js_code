function get(obj, path, defaultValue) {
  let arr_path = "";
  if (Array.isArray(path)) {
    arr_path = path;
  } else if (typeof path === "string") {
    let path_copy = "";
    for (let i = 0; i < path.length; i++) {
      if (i > 0 && path[i] === "[") {
        path_copy += ".";
      } else if (path[i] === "]") {
        //!! ] 这个不能加.了
      } else {
        path_copy += path[i];
      }
    }
    arr_path = path_copy.split(".");
  }

  console.log(arr_path);
  //!! 用reduce处理，非常的绝
  return (
    arr_path.reduce((result, key) => {
      return (result || {})[key];
    }, obj) || defaultValue
  );
}

var object = { a: [{ b: { c: 3 } }] };

console.log(get(object, "a[0].b.c"));
// => 3

console.log(get(object, ["a", "0", "b", "c"]));
// => 3

console.log(get(object, "a.b.c", "default"));
// => 'default'
