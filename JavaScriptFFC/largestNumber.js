/*
    You should create a function largestOfAll that takes an array of arrays as an argument.
    The function should return an array containing the largest number from each sub-array.
*/

function largestOfAll(arr){
    const largestNumber = [];

  for(let i = 0; i < arr.length; i++){
    let largeNum = arr[i][0];
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] > largeNum){
        largeNum = arr[i][j];
      }
    }
     largestNumber.push(largeNum);
  }

  return largestNumber;
}

const result = largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])

console.log(result);