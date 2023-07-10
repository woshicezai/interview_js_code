import "./index.css";
import { printOne } from "./one";
import { printTwo } from "./two";

function print() {
  document.getElementById(
    "app"
  ).innerText = `from one: ${printOne()}; from two: ${printTwo()}`;
}

if (module.hot) {
  module.hot.accept("./index.css", function () {
    console.log("CSS module updated!");
  });
  module.hot.accept("./one", function () {
    console.log("one module updated!");
    print();
  });
  module.hot.accept("./two", function () {
    console.log("two module updated!");
    print();
  });
  module.hot.accept("./utils", function () {
    console.log("utils module updated!");
  });
}

print();
console.log("run this line at index");
