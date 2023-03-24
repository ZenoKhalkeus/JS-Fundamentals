function solve(data){

    let nameArr = data.split(", ")
    let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}\b/g

    let match = pattern.exec(data)
    let res = []
    while(match !== null){
        res.push(match[0])
        match = pattern.exec(data)
    }
    console.log(res.join(" "))
}

solve("Ivan Ivanov, Ivan ivanov, Ivan IvAnov, IVan Ivanov, Test Testov, Ivan	Ivanov")