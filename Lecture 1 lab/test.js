function sumOfOddNumbers(num) {
    let sum = 0;
    let print = 0;
    for (let i = 0; i <= 100; i++) {
        if(print == num) {
            return console.log(`Sum: ${sum}`);
        }
        if(i % 2 === 1) {
            sum += i;
            console.log(i);
            print++
        }
    }
}

sumOfOddNumbers(5)