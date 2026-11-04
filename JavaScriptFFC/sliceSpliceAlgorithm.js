function frankenSplice(arr1, arr2, indx){
  const temp = arr2.slice();
  temp.splice(indx, 0, ...arr1);
  return temp;
}