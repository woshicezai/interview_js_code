const set_a = new Set([one, two, three]);

const set_b = new Set(set_a);
set_b.forEach((item) => {
  item();
});

function one() {
  set_a.delete(one);
  console.log("one");
  set_a.add(one);
}

function two() {
  set_a.delete(two);
  console.log("two");
  set_a.add(two);
}

function three() {
  set_a.delete(three);
  console.log("three");
  set_a.add(three);
}

console.log("set_b", set_b);
console.log("set_a", set_a);
