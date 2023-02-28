// #13 Blocking Event Loop

function repeat(operation, num) {
  if (num <= 0) return;
  operation();

  setTimeout(() => {
    repeat(operation, --num);
  }, 0);
}

module.exports = repeat;
