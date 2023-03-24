function solve(grade){

    let desc;
    let formattedGrade = grade.toFixed(2)

    if(grade<3){
        desc = "Fail"
        formattedGrade = 2
    }else if(grade < 3.5){
        desc = "Poor"
    }else if(grade < 4.5){
        desc = "Good"
    }else if(grade < 5.5){
        desc = "Very good"
    }else{
        desc = "Excellent"
    }

    console.log(`${desc} (${formattedGrade})`)


}

solve(2.99)