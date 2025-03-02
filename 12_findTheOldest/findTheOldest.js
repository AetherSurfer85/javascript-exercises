const findTheOldest = function(people) {
  const thisYear = (new Date()).getFullYear();
  let oldest = people[people.map(el => (el.yearOfDeath || thisYear) - el.yearOfBirth).reduce((iMax, el, i, arr) => el > arr[iMax] ? i : iMax, 0)];
  return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
