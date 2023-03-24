function solve(input){
    let myMap = new Map
    let limit = input.shift()

    let index = 0
    let command = input[index]

    while(command !=="Statistics"){
        [action,user,sent,received] = command.split("=")
        switch(action){
            case "Add":
                if(!myMap.has(user)){
                    myMap.set(user,[])
                    myMap.get(user).push(Number(sent))
                    myMap.get(user).push(Number(received))
                }
                break;
            case "Empty":
                if(user == "All"){
                    myMap.clear()
                }else{
                    myMap.delete(user)
                }
                break;
            case "Message":
                if(myMap.has(user) && myMap.has(sent)){
                    let oldSendValue = myMap.get(user)[0] + 1
                    let senderReceivevalue = myMap.get(user)[1]
                    if(oldSendValue + senderReceivevalue == limit){
                        console.log(`${user} reached the capacity!`)
                        myMap.delete(user)
                    }else{
                        myMap.get(user)[0] = oldSendValue
                    }
                    let oldReceivedValue = myMap.get(sent)[0] + 1
                    let recipientReceivevalue = myMap.get(sent)[1]
                    if(oldReceivedValue + recipientReceivevalue == limit){
                        console.log(`${sent} reached the capacity!`)
                        myMap.delete(sent)
                    }else{
                        myMap.get(sent)[0] = oldReceivedValue
                    }

                } //user = sender, sent = receiver
                break;
        }
        index++
        command = input[index]
    }

    console.log(`Users count: ${myMap.size}`)

    for([key,value] of myMap){
        let sum = value[0] + value[1]
        console.log(`${key} - ${sum}`)

    }
}

solve(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"])

