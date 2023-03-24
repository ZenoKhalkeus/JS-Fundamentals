function solve(n){

    let structure = "ATCGTTAGGG"
    let row = 1
    let i = 0
    let counter = 0
    let z = 0

    while(i<n){
        if (i%10==0){
            z = i
        }else{
            z = i *2
        }
        if(z >= 10){
            z = z % 10
        }
        let y = z + 1
        if (row == 1){
            console.log(`**${structure[z]}${structure[y]}**`) 
        }else if (row == 2){
            console.log(`*${structure[z]}--${structure[y]}*`)
        }else if (row == 3){
            console.log(`${structure[z]}----${structure[y]}`)
            counter++ 
        }if(!(counter % 2 == 0)){
            row--
        }else{
            row++
        }
        if(row==0){
            row+=2
            counter++
        }
        i++
    }
}
solve(12)