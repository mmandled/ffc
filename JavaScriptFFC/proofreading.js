function isPalindrome(word){

  if(word.toLowerCase() === word.split('').reverse().join('').toLowerCase()) return true;

  return false;
}

function findPalindromeBreaks(words){
  const nonPalindrome = [];

  for(let i = 0; i < words.length; i++){
    if(!isPalindrome(words[i])){
      nonPalindrome.push(i);
    }
  }
  return nonPalindrome;
}

function findRepeatedPhrases(words, phraseLength){
}