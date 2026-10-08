function mutation(arr){

  const available = arr[0].toLowerCase();
  const required = arr[1].toLowerCase();

  for(let i = 0; i < required.length; i++){
    if(!available.includes(required[i])){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));