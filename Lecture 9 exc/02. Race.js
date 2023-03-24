function solve(input){

    let nameMap = new Map
    let names = input.shift().split(", ")

    names.forEach(person =>{
        nameMap.set(person,0)
    })

    let letterPattern = /[A-Za-z]/gm
    let digitsPattern = /\d/g

    for(let i = 0; i < input.length; i++){
        let currentLine = input[i]
        if(input[i] === "end of race"){
            break;
        }
        let name = currentLine.match(letterPattern).join("")
        let distance = currentLine.match(digitsPattern).reduce((a,b) =>{return Number(a) + Number(b)})
        if(nameMap.has(name)){
            let prevDistance = nameMap.get(name)
            prevDistance += Number(distance)

            nameMap.set(name,prevDistance)
        }
    }
    let sortedNames = Array.from(nameMap).sort((a,b)=> {return b[1] - a[1]})

    let winners = sortedNames.slice(0,3)
    console.log(`1st place: ${winners[0][0]}`)
    console.log(`2nd place: ${winners[1][0]}`)
    console.log(`3rd place: ${winners[2][0]}`)
}
solve(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)