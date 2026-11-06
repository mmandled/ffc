// function bouncer(arr){
//   const result = arr.filter(Boolean);

//   return result;
// }

function bouncer(arr){
  const result = [];

  for(let i = 0; i < arr.length; i++){
    const current = arr[i];

    if(current){
      result.push(current);
    }
  }
  return result;
}