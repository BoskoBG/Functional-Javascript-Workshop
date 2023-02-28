// #9 Partial Application without Bind

const logger = (namespace) => {
  return function () {
    const args = Array.prototype.slice.call(arguments);

    console.log.apply(console, [namespace].concat(...args));
  };
};

module.exports = logger;
