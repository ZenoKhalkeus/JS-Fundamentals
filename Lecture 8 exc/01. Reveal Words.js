function solve(words,sentence){

    let wordsToReveal = words.split(", ")
    let sentenceArr = sentence.split(" ")
    

    for (let element of wordsToReveal){

        for(let word of sentenceArr){
            if(word.includes("*") && word.length === element.length){
                sentence = sentence.replace(word,element)
            }
        }
    }

    console.log(sentence)

}