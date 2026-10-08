function findLongestWordLength(sentence){
  let longest = "";

  const trimmed = sentence.trim();
  const word = trimmed.split(/\s+/);

  for(let i = 0; i < word.length; i++){
    if(word[i].length > longest){
      longest = word[i].length;
    }
  }

  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));