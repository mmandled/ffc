function findLongWord(words){
    const longWords = [];

    for(let i = 0; i < words.length; i++){
        if(words[i].length > 4){
            longWords.push({
                word: words[i],
                index: i
            });
        }
    }
    return longWords;
}

const result = findLongWord(["cat", "cut", "banana", "dog", "strawberry"]);
console.log(result);