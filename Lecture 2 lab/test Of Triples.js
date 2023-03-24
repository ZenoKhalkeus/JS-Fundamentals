function solve(n){
    print = ""

    for (let i = 0; i < n; i++){
        let letterA = String.fromCharCode(97+i)
        for (let j = 0; j < n; j++){
            let letterB = String.fromCharCode(97+j)
            print = letterA
            print += letterB
            for (let k = 0; k < n; k++){
                let letterC = String.fromCharCode(97+k)
                print+=letterC
                console.log(`${print}`)
                print = letterA + letterB
            }
        }
    }
}

solve(2)