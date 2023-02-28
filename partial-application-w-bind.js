// #10  Partial Application with Bind

const loggerBind = (namespace) => {
  return function () {
    const args = Array.prototype.slice.call(arguments);

    const fn = console.log.bind(console, namespace, ...args);
    fn();
  };
};

module.exports = loggerBind;
