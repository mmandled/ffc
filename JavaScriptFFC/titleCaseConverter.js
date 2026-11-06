function titleCase(str){
  const arr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

  return arr;
}

console.log(titleCase("sHoRt AnD sToUt"))