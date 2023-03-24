function solve(input){
    let regex = /^(.{1,})[>](\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})[<]\1$/g
    let numberOfPass = input.shift()

    for(let i = 0; i < numberOfPass; i++){
        let testPassword = input[i]
        let match = regex.exec(testPassword)
        let isValid = false
        let result = ""
        while(match !== null){
            isValid = true
            let digits = match[2]
            let smallLetters = match[3]
            let bigLetters = match[4]
            let symbols = match[5]
            result = `${digits}${smallLetters}${bigLetters}${symbols}`
            match = regex.exec(testPassword)
        }
        if(isValid){
            console.log(`Password: ${result}`)
        }else{
            console.log("Try another password!")
        }
        
    }
}

solve(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])
