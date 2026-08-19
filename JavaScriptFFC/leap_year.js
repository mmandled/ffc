let year = 0;

function isLeapYear(x) {
  if (x % 400 == 0) {
    return `${x} is a leap year.`;
  } else if (x % 100 == 0) {
    return `${x} is not a leap year.`;
  } else if (x % 4 == 0) {
    return `${x} is a leap year.`;
  }
}

let result = isLeapYear(year);
console.log(result);