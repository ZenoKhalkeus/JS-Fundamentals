function solve(input){
    
    
    let inputText = String(input)
    let newArray = inputText.split(" ")
    newArray.sort((a, b) => b - a)
    let result = ""
    let avg = 0
    for ( let z = 0; z < newArray.length; z++){
        let number = Number(newArray[z])
        avg += number
    }
    avg = avg / newArray.length
    for(let i = 0; i < newArray.length && i < 5;i++){
        let currentNumber=Number(newArray[i])
        if(currentNumber > avg){
        result += `${currentNumber} `
        }
    }
    if(result == ""){
        console.log("No")
    }else{
        console.log(result)
    }

}
solve('1')
