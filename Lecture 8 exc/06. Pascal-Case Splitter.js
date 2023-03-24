function solve(input){

    let arr = []
    let index = 1
    let end = input.length
    let cut = 0

    while(index < end){
        if(input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90){
            arr.push(input.slice(cut, index))
            cut = index
        }
        index++
    }
    arr.push(input.slice(cut, index))
    console.log(arr.join(", "))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')