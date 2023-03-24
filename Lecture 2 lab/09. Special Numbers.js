function solve(num){
    let sum = 0
    let newNum = 1
    let isSpecial = false
    while(newNum <= num){
        newNum = String(newNum)
        for(let i = 0; i < newNum.length; i++){
            sum+=Number(newNum[i])
        }
        if(sum == 5 || sum == 7 || sum == 11){
            isSpecial = true
        }
        if (isSpecial){
            console.log(`${newNum} -> True`)
        }else{
            console.log(`${newNum} -> False`)
        }
        isSpecial = false
        sum = 0
        newNum = Number(newNum)
        newNum++
    }
}

solve(15)