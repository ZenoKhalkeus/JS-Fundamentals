function solve(array){

    array.sort()
    let i = 1
    for(let el of array){

        console.log(`${i}.${el}`)
        i++
    }
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])