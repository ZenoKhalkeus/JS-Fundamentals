function solve(n1, n2){

    let factorialOfN1 = 1
    let factorialOfN2 = 1

    for (;;){
        if(n1 == 0){
            break
        }
        factorialOfN1 *= n1
        n1--
    }
    for (; n2>0; n2--){
        factorialOfN2 *= n2
    }

    console.log((factorialOfN1/factorialOfN2).toFixed(2))
}

solve(5,
    2
    )