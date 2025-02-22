const sumAll = function(m, n) {
  if (!Number.isInteger(m) || !Number.isInteger(n) || m < 0 || n < 0) { return 'ERROR' };
  const max = Math.max(m, n);
  const min = Math.min(m, n);
  return (max * (max + 1) - min * (min - 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
