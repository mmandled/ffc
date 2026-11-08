function uniteUnique(arr1, arr2, ...arr){
  const result = [];
  const allArr = [arr1, arr2, ...arr];

  for(let i = 0; i < allArr.length; i++){
    const currentArr = allArr[i];

    for(let j = 0; j < currentArr.length; j++){
      const currentItem = currentArr[j];

      if(result.indexOf(currentItem) === -1){
        result.push(currentItem);
      }
    }
  }
  return result;
}