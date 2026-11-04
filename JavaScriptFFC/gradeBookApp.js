function getAverage(arr){
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  let avg = sum / arr.length;

  return avg;
}

function getGrade(num){

  switch(true){
    case num === 100:
      return "A+";
    case num >= 90:
      return "A";
    case num >= 80:
      return "B";
    case num >= 70:
      return "C";
    case num >= 60:
      return "D";
    case num >= 0:
      return "F";
  }
}

function hasPassingGrade(num){

    return getGrade(num) !== "F";

//  ANOTHER WAY
//   if(getGrade(num) != "F"){
//     return true;
//   }

//   return false;
 }

function studentMsg(arr, num){
  if(hasPassingGrade(num)){
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(num)}. You passed the course.`
  }else{
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(num)}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));