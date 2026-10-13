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
   const result = [];
  if(phraseLength >= words.length){
    return [];
  }
  for(let i = 0; i <= words.length - phraseLength; i++){
    const phrase = words.slice(i, i + phraseLength);
    for(let j = 0; j <= words.length - phraseLength; j++){
      const otherPhrase = words.slice(j, j + phraseLength);
      if(i !== j && phrase.join(" ") === otherPhrase.join(" ")){
        result.push(i);
        break;
      }
    }
  }
  return result;
}

function analyzeTexts(texts, phraseLength){
  const result = [];
  if(texts.length === 0){
    return []; 
  }

  for(let i = 0; i < texts.length; i++){
    const words = texts[i];
    
    const findRepPhrase = findRepeatedPhrases(words, phraseLength);
    const findPalin = findPalindromeBreaks(words);

    result.push({
  repeatedPhrases: findRepPhrase,
  palindromeBreaks: findPalin
});
  }

  return result;
}
