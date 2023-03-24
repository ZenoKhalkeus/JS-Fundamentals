function solve(arr){

    let result = []
    
    for(el of arr){
        el = Number(el)
        if(el < 0){
            result.unshift(el)
        }else{
            result.push(el)
        }
    }
    console.log(result.join("\n"))
}