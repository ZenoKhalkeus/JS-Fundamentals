function solve(n){
    print = ""

    for (let i = 0; i < n; i++){
        let letterA = String.fromCharCode(97+i)
        for (let j = 0; j < n; j++){
            let letterB = String.fromCharCode(97+j)
            for (let k = 0; k < n; k++){
                let letterC = String.fromCharCode(97+k)
                console.log(`${letterA}${letterB}${letterC}`)
            }
        }
    }
}

solve(2)