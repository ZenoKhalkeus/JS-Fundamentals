function solve(){
    let text = "Random text lalala"
    let pattern = /\w+/g
    let matches = text.match(pattern)
    for(let el of matches){
        console.log(el)
    }
}
solve()