function solve(n){
    let num = 1
    let sum = 1
    let index = 1

    console.log(num)
    while (index < n){
        num += 2
        console.log(num)
        sum += num
        index++
    }

    console.log(`Sum: ${sum}`)
}

solve(5)