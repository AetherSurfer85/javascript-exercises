const reverseString = function(str) {
  const firstCharIndex = -str.length;
  let reversedStr = '';
  for (let i = -1; i >= firstCharIndex; i--) {
    reversedStr = reversedStr.concat(str.at(i));
  }
  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
