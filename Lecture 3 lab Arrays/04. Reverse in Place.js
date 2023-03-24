function solve(arr){
    let buff = ""

    for(let i = arr.length-1; i >= 0; i--){
        buff += arr[i]
        buff += " "
    }

    console.log(buff)

}

solve(['abc', 'def', 'hig', 'klm', 'nop'])

// Alt Solution

function solve(arr){
    let k = arr.length-1

    for(let i = arr.length-1; i >= 0; i--){
        let temp = arr[i]
        arr[i] = arr[k-i]
        arr[k-i] = temp
    }

    console.log(arr.join(" "))

}

solve(['abc', 'def', 'hig', 'klm', 'nop'])
