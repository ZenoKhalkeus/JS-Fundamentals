function solve(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){

    let expenses = 0
    let lostFightsCounter = 0
    let shieldBrokeCounter = 0

    for(let i = 1; i <= lostFights;i++){
        lostFightsCounter++
        if(lostFightsCounter % 2 === 0){
            expenses += helmetPrice
        }
        if(lostFightsCounter % 3 === 0){
            expenses += swordPrice
        }
        if(lostFightsCounter % 6 === 0){
            expenses += shieldPrice
            shieldBrokeCounter++
            
            if(shieldBrokeCounter % 2 === 0){
                expenses += armorPrice
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

solve(7,
    2,
    3,
    4,
    5
    )