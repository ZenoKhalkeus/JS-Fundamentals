function solve(arr1, arr2){
    let count = 0
    let [take,del,search] = arr2
    arr1 = arr1.slice(0, take)
    for(let i = 0; i < del; i++){
        arr1.shift()
    }
    for(let el of arr1){
        if(el === search){
            count++
        }
    }
    console.log(`Number ${search} occurs ${count} times.`)
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )