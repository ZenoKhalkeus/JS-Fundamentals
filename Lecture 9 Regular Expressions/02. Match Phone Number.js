function solve(input){

    let pattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}\b/g
    let phoneNumbersList = input[0]
    res = []
    let match = pattern.exec(phoneNumbersList)
    while(match !==null){
        res.push(match[0])
        match = pattern.exec(phoneNumbersList)
    }
    console.log(res.join(", "))
}

solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])