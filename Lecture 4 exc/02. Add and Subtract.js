function solve(first, second, third){

    let sumOfTwo = sum(first,second)
    let finalResult = subtract(sumOfTwo,third)
    console.log(finalResult)

    function sum(first,second){
        return first + second
    }
    function subtract(sumOfTwo,third){
        return sumOfTwo - third
    }

}