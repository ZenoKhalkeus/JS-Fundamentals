function solve(start, end){
    
    let sum = 0
    let printLine = ""

    for (let currentNumber = start; currentNumber <= end; currentNumber++) {
        sum += currentNumber
        if (currentNumber === end){
        printLine +=`${currentNumber}`
        }else{
        printLine +=`${currentNumber} `        
     }
}

    console.log(printLine)
    console.log(`Sum: ${sum}`)
}

solve(5,10)