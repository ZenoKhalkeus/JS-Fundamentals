function solve(input){
    let myMap = new Map()
    let searchedWords = input.shift()

    let token = searchedWords.split(" ")
    for(let y = 0; y < token.length; y++){
            let currentWord = token[y]
            let counter = 0
            myMap.set(currentWord,counter)
            
            for(let i = 0; i < input.length; i++){
                let currentArrayWord = input[i]
                if(currentWord === currentArrayWord){
                    let oldCounter = myMap.get(currentWord)
                    myMap.set(currentWord,Number(oldCounter) + 1)
                }
            }
        }
        
// for of -> token -> myMap.set(el,0)
// for of -> el of input -> has(el) -> value +=1 -> map.set -> el, newValue
    let sortedMap = Array.from(myMap)
    sortedMap.sort((a,b) => b[1] - a[1])

    for(let [k,v] of sortedMap){
        console.log(`${k} - ${v}`)
    }
    


}

solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )