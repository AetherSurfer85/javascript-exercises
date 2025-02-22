const removeFromArray = function(array, ...rest) {
  let reducedArray = [];
  const n = array.length;
  for (let i = 0; i < n; i++) {
    if (!rest.includes(array[i])) { reducedArray.push(array[i]) };
  }
  return reducedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
