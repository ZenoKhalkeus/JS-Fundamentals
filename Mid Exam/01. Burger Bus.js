function solve(array){
    let numberOfCities = array.shift()
    let cityTracker = 1
    let totalSum = 0

    for(let i = 0; i < array.length; i+=3){
        let cityName = array[i]
        let expenses = array[i+2]
        let profit = array[i+1]
        if(cityTracker % 5 == 0){
            profit *= 0.9
        }else if(cityTracker % 3 == 0){
            expenses *= 1.5
        }
        cityTracker++

        let income = profit - expenses
        totalSum += income

        console.log(`In ${cityName} Burger Bus earned ${(profit - expenses).toFixed(2)} leva.`)


    }

    console.log(`Burger Bus total profit: ${totalSum.toFixed(2)} leva.`)

}

solve((["3",
"Sofia",
"895.67",
"213.50",
"Plovdiv",
"2563.20",
"890.26",
"Burgas",
"2360.55",
"600.00"])
)