function solve(num){
    let numberAsString = String(num)
    let sumOfAllDigits = 0

    for(let i = 0; i < numberAsString.length; i++){
        let currentDigit = Number(numberAsString[i])
        sumOfAllDigits += currentDigit
    }

    console.log(sumOfAllDigits)
}