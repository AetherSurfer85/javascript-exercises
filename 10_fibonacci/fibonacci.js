const fibonacci = function(n) {
  if (typeof (n) == "string") n = parseInt(n);
  if (n < 0) return "OOPS";
  if (n == 0) return 0;
  if (n < 3) return 1;
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    b = b + a;
    a = b - a;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
