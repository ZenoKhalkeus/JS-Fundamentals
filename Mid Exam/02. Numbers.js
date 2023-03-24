function solve(array){
    let sequence = array.shift().split(" ").map(Number)
    let index = 0
    let command = array[index]
    while(command !== "Finish"){
        let commands = array[index].split(" ")
        let element = +commands[1]
        switch(commands[0]){
            case "Add": 
            sequence.push(element)
            break;
            case "Remove":
             element = +commands[1]
             foundIndex = sequence.indexOf(element)
            sequence.splice(foundIndex, 1);
             break;
            case "Replace":
            element = +commands[1]
            let replaceValue = commands[2]
            foundIndex = sequence.indexOf(element)
            sequence.splice(foundIndex,1, replaceValue);
            break;
            case "Collapse":
            element = +commands[1]
            sequence = sequence.filter(x => x >= element)
        }
        index++
        command = array[index]
    }
    console.log(sequence.join(" "))
}

solve((["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])
)