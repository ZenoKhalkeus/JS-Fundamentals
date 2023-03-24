function solve(number){

    let completed = "%".repeat(number/10)
    let incompleted = ".".repeat(10 - completed.length)

    if(number == 100){
        console.log("100% Complete!")
    }else{
        console.log(`${number}% [${completed}${incompleted}]`)
        console.log("Still loading...")
    }
}

solve(30)