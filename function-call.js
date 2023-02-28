// #18 Function Call

const slice = (arr, start, end) => Array.prototype.slice.call(arr, start, end);

module.exports = slice;
