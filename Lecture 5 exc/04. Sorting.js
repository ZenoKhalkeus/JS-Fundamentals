function solve (arr){
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