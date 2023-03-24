function solve(num1, num2, num3){
    let result = num1 + num2 + num3
    let resToString = String(result)
    let isFloat = false
    for(let i = 0; i<resToString.length; i++){
        if(resToString[i] === "."){
            isFloat = true
        }
    }
    console.log(`${result} - ${isFloat ? "Float" : "Integer"}`)

    // let result = num1 + num2 + 
    // console.log(`${result} - ${parseInt(result) === result ? "Integer" : "Float"}`)

}
solve(9, 100, 1.1)