function solve(firstWord, char, secondWord){
    let res = "" // let res = firstWord.replace("_", char)

    for(let i = 0; i < firstWord.length; i++){
        let currentChar = firstWord[i]
        if(currentChar === "_"){
            res+=char
        }else{
            res+= currentChar
        }
    }

    if (res === secondWord){
        console.log("Matched")
    }else{
        console.log("Not Matched")
    }
}

solve('Str_ng', 'I', 'Strong')