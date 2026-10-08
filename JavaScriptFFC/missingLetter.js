function fearNotLetter(str){

  for(let i = 0; i < str.length - 1; i++){

    let result = str[i + 1].charCodeAt() - str[i].charCodeAt();
      if(result === 1){
        continue;
      }
      return String.fromCharCode(str[i].charCodeAt() + 1);    
  }
  return undefined;
}

console.log(fearNotLetter("abce"));