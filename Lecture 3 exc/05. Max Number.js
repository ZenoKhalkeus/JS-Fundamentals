function solve(array){

    let newArray = []
    let arrayL = array.length
    
    for(let i = 0; i < arrayL; i++){
        let number1 = array[i]
        let isLargest = true

        for(let j = i + 1;j <arrayL;j++){
            let number2 = array[j]
            if(number1 <= number2){
                isLargest = false;
                break
            }
        }
        if(isLargest){
            newArray.push(number1)
        }
    }
    console.log(newArray.join(" "))
}
solve([1, 4, 3, 2])