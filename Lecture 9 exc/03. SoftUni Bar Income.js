function solve(input){
    let pattern = /%(?<name>[A-Z][a-z]+)%[^$%|.0-9]*<(?<product>\w+)>[^$%|.0-9]*\|(?<count>\d+)\|([^$%|.0-9]*)(?<price>\d+(\.\d+)?)\$/g    
    let totalSum = 0


    let text = input.join(" ")
    let current = pattern.exec(text)

    while(current){
        let currentPrice = current.groups.count * current.groups.price
        console.log(`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)}`)
        totalSum += currentPrice
        current = pattern.exec(text)
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`)
}
solve(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)