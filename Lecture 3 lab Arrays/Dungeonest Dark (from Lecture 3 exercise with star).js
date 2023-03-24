function solve(arr){
    let dungeon = arr[0]
    let newArray = []
    let result = ""

    for(let i = 0; i < dungeon.length; i++){
        if(dungeon[i] === "|" || dungeon[i] === " "){
            newArray.push(result)
            result = ""
            continue
        }else{
            result += dungeon[i]
        }
        if(i == dungeon.length-1){
            newArray.push(result);
        }
    }
    
    let roomTracker = 0
    let health = 100
    let gold = 0
    let healCount = 0
    for(y = 0; y < newArray.length; y++){
        let command = newArray[y]
        if (command !== "potion" && command !== "chest"){
            y++
            health -= newArray[y]
            roomTracker++
            if(health>0){
                console.log(`You slayed ${command}.`)
            }else{
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${roomTracker}`)
                break
            }
        }else if(command === "potion"){
            y++
            roomTracker++
            oldHealth = health
            health+=Number(newArray[y])
            healCount=Number(newArray[y])
            if (health > 100){
                healCount = 100 - oldHealth
                health = 100
            }
            console.log(`You healed for ${healCount} hp.`)
            console.log(`Current health: ${health} hp.`)
        }else if(command == "chest"){
            roomTracker++
            y++
            gold+=Number(newArray[y])
            console.log(`You found ${newArray[y]} coins.`)
        }
    }

    if (health > 0){
        console.log("You've made it!")
        console.log(`Coins: ${gold}`)
        console.log(`Health: ${health}`)
    }

}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])