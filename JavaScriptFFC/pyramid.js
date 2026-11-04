function pyramid(str, num, bool){
  let result = "\n"; 

  for(let i = 0; i < num; i++){
    let rowStr = "";

    let spaces = bool ? i : num - i - 1;
    let characters = bool ? 2 * (num - i - 1) + 1: 2 * i + 1;

    for(let j = 0; j < spaces; j++){
      rowStr += " ";
    }

    for(let j = 0; j < characters; j++){
      rowStr += str;
    }

    result += rowStr + "\n";
  }

  return result;
}

console.log(pyramid("p", 5, true))

