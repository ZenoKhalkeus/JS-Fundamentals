function solve(searchWord,sentence){

    let words = sentence.toLowerCase().split(" ")

    for(let word of words){
        if(word === searchWord.toLowerCase()){
            console.log(searchWord)
            return
        }
    }

    console.log(`${searchWord} not found!`)
}

solve('javascript',
'JavaScript is the best programming language'
)