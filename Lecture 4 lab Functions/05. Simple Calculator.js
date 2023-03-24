function solve(x, y, operator){
    let res;

    switch(operator){
        case "multiply": res = x * y; break;
        case "divide": res = x / y; break;
        case "add": res = x + y; break;
        case "subtract": res = x - y; break
    }

    console.log(res)
}

solve(5,
    5,
    'multiply'
    )