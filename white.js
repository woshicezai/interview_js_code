const getNext = (needle) => {
  let next = [];
  let j = 0;
  next.push(j);

  for (let i = 1; i < needle.length; ++i) {
    while (j > 0 && needle[i] !== needle[j]) j = next[j - 1];
    if (needle[i] === needle[j]) j++;
    next.push(j);
  }

  return next;
};

const next = getNext("agctagcagctagct");
console.log(next);
/**
 *  a  g  c  t  a  g  c  a  g  c  t  a  g  c  t
 * [0, 0, 0, 0, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 4];
 */
