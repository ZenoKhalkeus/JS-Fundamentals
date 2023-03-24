function solve(numOfPages,pagesReadperHour,days){
    let totalTime = numOfPages / pagesReadperHour
    let perDayReading = totalTime / days

    console.log(perDayReading)
}

solve(212,
    20 ,
    2 
    )