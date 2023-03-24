function messagesManager(input) {
    let count = Number(input.shift());
    let people = {};
 
    while (input[0] !== "Statistics") {
        let tokens = input.shift().split("=");
        let command = tokens[0];
 
        if (command === "Add") {
            let user = tokens[1];
            let sent = Number(tokens[2]);
            let received = Number(tokens[3]);
 
            if (people != undefined) {
                people[user] = {
                    sent,
                    received
                };
            }
 
        } else if (command === "Message") {
            let sender = tokens[1];
            let receiver = tokens[2];
 
            if (people.hasOwnProperty(sender) && people.hasOwnProperty(receiver)) {
                people[sender].sent++;
                people[receiver].received++;
            }
 
            if (people[sender].sent >= count) {
                delete people[sender];
                console.log(`${sender} reached the capacity!`);
            }
            if (people[receiver].received >= count) {
                delete people[receiver];
                console.log(`${receiver} reached the capacity!`);
            }
 
        } else if (command === "Empty") {
            let name = tokens[1];
 
            if (people.hasOwnProperty(name)) {
                people[name].sent = 0;
                people[name].received = 0;
            }
 
            if (name === "All") {
                for (let name in people) {
                    delete people[name];
                }
            }
        }
    }
    console.log(people);
    let total = Object.keys(people);
    let counter = 0;
 
    for (let keys of total) {
        counter++;
 
    }
    console.log(`Users count: ${counter}`);
 
    let entries = Object.entries(people);
 
    for (let [user, data] of entries) {
        let sum = Number(data.sent) + Number(data.received);
        console.log(`${user} - ${sum}`);
    }
}

messagesManager(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"]);

