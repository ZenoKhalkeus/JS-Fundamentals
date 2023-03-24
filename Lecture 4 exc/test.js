function numberModification(modifiedNumber) {
    while (average(modifiedNumber) < 5) {
        modifiedNumber += '9';
    }
    console.log(modifiedNumber);

    function average(a) {
        return totalSum(a) / a.toString().length;
    }

    function totalSum(b) {
        let numToString = b.toString();
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        return sum;
    }
}

numberModification(101)