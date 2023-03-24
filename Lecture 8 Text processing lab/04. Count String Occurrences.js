function solve(text,word){

    let textArr = text.split(" ")
    let count = textArr.filter(x=> x=== word).length
    console.log(count)
}