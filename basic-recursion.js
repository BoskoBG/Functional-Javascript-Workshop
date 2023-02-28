// #7 Basic: Recursion

function reduce(arr, fn, initial) {
  const recursiveFn = (index = 0) => {
    if (index === arr.length) return initial;
    initial = fn(initial, arr[index], index, arr);
    return recursiveFn(index + 1);
  };

  return recursiveFn(0);
}

module.exports = reduce;
