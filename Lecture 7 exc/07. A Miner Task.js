function solve(input){

    let map = new Map()

    for(let i = 0; i < input.length; i+=2){
        let res = input[i]
        let gain = Number(input[i+1])
        if(!(map.has(res))){
            map.set(res,gain)
        }else{
            let oldGain = Number(map.get(res))
            map.set(res,gain+oldGain)
        }
    }

    for([k,v] of map){
        console.log(`${k} -> ${v}`)
    }
}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
     )