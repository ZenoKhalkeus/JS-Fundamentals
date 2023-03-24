function solve(priceRatings, entryPoint, itemType){


    let sumLeft = 0
    let sumRight = 0
    for(let i = 0; i < priceRatings.length; i++){
        
        if(itemType == "cheap"){
            for(let y = 0; y < entryPoint; y++){
                let currentItem = +priceRatings[y]
                if(currentItem < priceRatings[entryPoint]){
                    sumLeft+= currentItem
                }
            }for(let z = entryPoint+1; z < priceRatings.length; z++){
                let currentItem = +priceRatings[z]
                if(currentItem < priceRatings[entryPoint]){
                    sumRight+= currentItem
                }
            }
        }
        if(itemType == "expensive"){
            for(let k = 0; k < entryPoint; k++){
                let currentItem = Number(priceRatings[k])
                if(currentItem >= priceRatings[entryPoint]){
                    sumLeft+= currentItem
                }
            }for(let j = entryPoint+1; j < priceRatings.length; j++){
                let currentItem = Number(priceRatings[j])
                if(currentItem >= priceRatings[entryPoint]){
                    sumRight+= currentItem
                }
            }
        }
        break;
    }
    if(sumLeft >= sumRight){
        console.log(`Left - ${sumLeft}`)
    }else{
        console.log(`Right - ${sumRight}`)
    }
}

solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
    
    
    
    