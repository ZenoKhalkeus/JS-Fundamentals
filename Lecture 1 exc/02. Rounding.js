function solve(givenNumber,precision){

    if (precision > 15){
        precision = 15
    }
    let roundedNumber = givenNumber.toFixed(precision)

    console.log(parseFloat(roundedNumber))

}

solve(10.5,3)