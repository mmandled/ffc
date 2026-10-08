function getVowelCount(sentence){
  const vowels = "aeiou";
  let count = 0;

  for(const char of sentence.toLowerCase()){
    if(vowels.includes(char)){
      count++;
    }
  }
  
  return count;
}
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function getConsonantCount(sentence){
  const vowels = "aeiou";
  let count = 0;

  for(const char of sentence.toLowerCase()){
    if(char >= 'a' && char <= 'z'){
      if(!vowels.includes(char)){
      count++;
    }
    }
  }

  return count;
}

function getPunctuationCount(sentence){
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;

  for(const char of sentence.toLowerCase()){
    if(!letters.includes(char) && char !== " "){
      count++;
    }
  }

  return count;
}

function getWordCount(sentence){

  const trimmed = sentence.trim();

  if(trimmed === ""){
    return 0;
  }

  const word = trimmed.split(/\s+/);

  return word.length;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);