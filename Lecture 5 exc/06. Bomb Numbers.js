function solve(arr1, arr2){
    let [bomb,power] = arr2

    for(let i = 0; i < arr1.length;i++){
        let currentNumber = Number(arr1[i])
        if(currentNumber === bomb){
            for(let j = i, count = 0; count < power && j >= 0; count++,j--){
                arr1[j-1] = "bombed"
            }
            for(let k = i, count = 0; count < power && k < arr1.length; count++,k++){
                arr1[k+1] = "bombed"
            }
            arr1[i] = "bombed"
        }
    }
    arr1 = arr1.filter((el) => el !== "bombed")
    let sum = 0
    for(let element of arr1){
        element = Number(element)
        sum += element
    }
    console.log(sum)
}
solve([4, 2, 8, 4, 2, 2, 4, 2, 2, 2, 2, 4, 8, 8, 4, 8, 8, 1],
    [4, 2])
    