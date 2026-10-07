const num = 7;

function factorialCalculator(num){
  let result = 1;
  for(; num > 1; num--){
    result = result * num;
  }

  return result;
}

const factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);