let year = 0;

function isLeapYear() {
  if (x / 4) {
    return `[${year}] is a leap year`;
  } else if (x / 100) {
    return `[${year}] is not a leap year`;
  } else if (x / 400) {
    return `[${year}] is a leap year`;
  }
}

let result = isLeapYear(year);
console.log(isLeapYear(result));