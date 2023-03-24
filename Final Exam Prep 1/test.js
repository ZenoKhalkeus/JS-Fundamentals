function solve(row){
    let firstNumber = 1
    let currentStartNumber = 1
    let oldcurrentNumber = 0
    for(let i = 1; i < row; i++){
        let currentNumber = oldcurrentNumber + 2
         oldcurrentNumber = currentNumber
        currentStartNumber = currentStartNumber + currentNumber
    }
    console.log(currentStartNumber)
    
}
solve(1000)

function meow(n){
    let firstNumFromRow;
    let rowSum;
    let firstNumFromLastRow = 1
    for(let i = 0; i < 2 * n; i+=2){
        firstNumFromRow = firstNumFromLastRow + i
        firstNumFromLastRow = firstNumFromRow
    }
    console.log(firstNumFromLastRow)
}
meow(1000)