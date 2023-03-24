function solve(data){

    let phoneBooks = {}

    for(let line of data){
        let [userName,number] = line.split(" ")
        phoneBooks[userName] = number
    }

    for(let key in phoneBooks){
        console.log(key, "->", phoneBooks[key])
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)