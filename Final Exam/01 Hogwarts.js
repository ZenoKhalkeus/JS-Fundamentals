function solve(input){
    let magicString = input.shift()
    let index = 0
    let command = input[index]

    while(command !== "Abracadabra"){
        let [spell, insideIndex, letter] = command.split(" ")
        let result = ""
        switch(spell){
            case "Abjuration":
                 result = ""

                for (let el of magicString){
                    let currChar = el.charCodeAt(0)
                    if(currChar >= 97 && currChar <=122){
                        el = el.toUpperCase()
                    }
                    result +=el
                    
                }
                magicString = result
                console.log(magicString)
            break;
            case "Necromancy":
                 result = ""

                for (let el of magicString){
                    let currChar = el.charCodeAt(0)
                    if(currChar >= 65 && currChar <=90){
                        el = el.toLowerCase()
                    }
                    result +=el
                    
                }
                magicString = result
                console.log(magicString)
            break;
            case "Illusion":
                if(insideIndex>=0 && insideIndex < magicString.length){
                    let newString = magicString.split("")
                    newString.splice(insideIndex,1,letter)
                    magicString = newString.join("")
                    console.log("Done!")
                }else{
                    console.log("The spell was too weak.")
                }
            break;
            case "Divination":
                if(!magicString.includes(insideIndex)){
                    index++
                    command = input[index]
                    continue
                }else{
                    while(magicString.includes(insideIndex) != false){
                        let newMagic = magicString.replace(insideIndex,letter)
                    magicString = newMagic
                    
                }
                console.log(magicString)
                }
            break;
            case "Alteration":
                if(!magicString.includes(insideIndex)){
                    index++
                    command = input[index]
                    continue;
                }else{
                    let newMagicString = magicString.replace(insideIndex,"")
                    magicString = newMagicString
                    console.log(magicString)
                }
            break;
            default: 
            console.log("The spell did not work!")
            break;
        }
        index++
        command = input[index]
    }
    


}

solve(["TR1GG3R",
"Necromancy",
"Divination g z",
"Abjuration",
"Abracadabra"])



