function solve(arr) {
    let parsedArr = arr.map(Number);
    let dailyConcrete = [];
    let totalConcrete = 0;
    let costs = 0;
    let crews = parsedArr.filter(x => x < 30).length;
    while (crews > 0) {
        let concretePerDaySum = 0;
        for (let i = 0; i < parsedArr.length; i++){
            if (parsedArr[i] !== 30) {
                parsedArr[i]++;
                concretePerDay += 195;
                if (parsedArr[i] == 30) {
                    crews--;
                }
            }
        }
        totalConcrete += concretePerDaySum;
        dailyConcrete.push(concretePerDaySum);
    }
    costs = totalConcrete * 1900;
    console.log(dailyConcrete.join(", "));
    console.log(`${costs} pesos`);
}

solve([21, 25, 28])
