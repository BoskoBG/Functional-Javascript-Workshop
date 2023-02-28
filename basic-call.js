// #8 Basic: Call

function duckCount() {
  const args = Array.prototype.slice.call(arguments);
  return args.filter((arg) => {
    return Object.prototype.hasOwnProperty.call(arg, "quack");
  }).length;
}

module.exports = duckCount;
