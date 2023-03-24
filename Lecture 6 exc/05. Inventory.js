function solve(arr){

    let heroes = []

    for(let heroInfo of arr){
        let [name, level, items] = heroInfo.split(" / ")
        let currentHero = {
            name: name,
            level: +level,
            items: items
        }
        heroes.push(currentHero)
    }

    let sortedByLevel = heroes.sort((a,b) => {
        return a.level - b.level
    })

    for(let el of sortedByLevel){
        console.log(`Hero: ${el.name}`)
        console.log(`level => ${el.level}`)
        console.log(`items => ${el.items}`)
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )