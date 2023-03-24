function solve(input){

    let map = new Map()

    for(let el of input){
        [team, id] = el.split(" -> ")
        if(!(map.has(team))){
            map.set(team,new Set())
        }
            map.get(team).add(id)

    }
    let sortedArray = Array.from(map)
    sortedArray.sort((a,b) => a[0].localeCompare(b[0]))

    for(let [k,v] of sortedArray){
        console.log(k)
        for(let el of v){
            console.log(`-- ${el}`)
        }
    }

}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )