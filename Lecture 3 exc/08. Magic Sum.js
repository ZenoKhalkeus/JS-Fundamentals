function solve(array, number){

    let arrOfValid = []
    let validPair = ""

    for(let i = 0; i < array.length;i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] + array[j] === number){
                validPair = `${array[i]} ${array[j]}`
                arrOfValid.push(validPair)
            }
        }
    }
    console.log(arrOfValid.join(`\n`))


}
solve([9, 7, 6, -5, 19, 23],
    4
    ) 