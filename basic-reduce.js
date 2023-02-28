// #6 Basic: Reduce

function countWords(inputWords) {
  return inputWords.reduce((acc, curr) => {
    if (!acc[curr]) return { ...acc, [curr]: 1 };
    return { ...acc, [curr]: acc[curr] + 1 };
  }, {});
}

module.exports = countWords;
