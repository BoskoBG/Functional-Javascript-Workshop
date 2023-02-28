// #16 Recursion

const getDependencies = (tree, currObj = tree, result = [], index = 0) => {
  if (!tree.dependencies) return [];

  if (currObj === tree) currObj = tree.dependencies;

  const dependenciesArr = Object.keys(currObj);

  result = [...result, ...dependenciesArr];

  if (index === Object.keys(currObj).length - 1) return result;

  dependenciesArr.forEach((dep, i) => {
    getDependencies(tree, currObj[dep], result, i);
  });

  return result;
};

console.log(
  getDependencies({
    name: "lorem-ipsum",
    version: "0.1.1",
    dependencies: {
      optimist: {
        version: "0.3.7",
        dependencies: {
          wordwrap: {
            version: "0.0.2",
          },
        },
      },
      inflection: {
        version: "1.2.6",
      },
    },
  })
);
