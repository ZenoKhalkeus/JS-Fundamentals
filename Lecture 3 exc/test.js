function sorting (arr){
    let descendingArr = arr.sort((a,b) => b-a) 
    let outputArr = [] 
     for (let i = 0; i < descendingArr.length; i++) {
        if(i == descendingArr.length - 1){
            outputArr.push(descendingArr[i])
        }else{
        outputArr.push(descendingArr[i]);
        let lastElement = descendingArr.pop();
        outputArr.push(lastElement);
        }
     }
     
     console.log(outputArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([1, 3, 52, 69, 63, 31, 2, 18, 94])