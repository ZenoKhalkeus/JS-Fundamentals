function solve(arr){
    let sum = 0

    for(let i = 0; i<arr.length; i++){
        let currNum = Number(arr[i])
        if(currNum%2==0){
            sum+=currNum
        }
    }
    console.log(sum)
}

solve(['2','4','6','8','10'])

// For-Of Cycle sol

function solve(arr){
    let sum = 0

    for(el of arr){
        let currEl = Number(el)
        if(currEl%2==0){
            sum+=currEl
        }
    }
    console.log(sum)
}
solve(['2','4','6','8','10'])