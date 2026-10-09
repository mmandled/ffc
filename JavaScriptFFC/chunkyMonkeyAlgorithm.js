function chunkArrayInGroups(arr, size){

  const chunk = [];
  for(let i = 0; i < arr.length; i += size){
    chunk.push(arr.slice(i, i + size));
  }

  return chunk;
}