// #11 Implement Map with Reduce

const arrayMap = (arr, fn) => {
  return arr.reduce((acc, curr) => [...acc, fn(curr)], []);
};

module.exports = arrayMap;
