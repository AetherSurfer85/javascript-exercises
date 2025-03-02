const palindromes = function(str) {
  if (str == "") { return true };
  let ptr1 = 0;
  let ptr2 = str.length - 1;
  //Initialize pointers to valid character positions
  while (/[^a-zA-Z0-9]/.test(str[ptr1]) && ptr1 < ptr2) {
    ptr1++;
  }
  if (ptr1 == ptr2) { return true }
  while (/[^a-zA-Z0-9]/.test(str[ptr2])) {
    ptr2--;
  }
  //Test if antipodal valid characters match
  while (ptr1 < ptr2) {
    if (str[ptr1].toLowerCase() != str[ptr2].toLowerCase()) { return false };
    do { ptr1++ } while (/[^a-zA-Z0-9]/.test(str[ptr1]));
    do { ptr2-- } while (/[^a-zA-Z0-9]/.test(str[ptr2]));
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
