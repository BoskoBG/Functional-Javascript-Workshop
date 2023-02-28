// #12 Function Spies

const Spy = (target, method) => {
  const oldMethod = target[method];

  const spy = { count: 0 };

  target[method] = function () {
    spy.count++;
    return oldMethod();
  };

  return spy;
};

// const spy = Spy(console, "error");

// console.error();
// console.error();
// console.error();

module.exports = Spy;
