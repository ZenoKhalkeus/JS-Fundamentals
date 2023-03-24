function wordOccurrences(arr) {
    let map = new Map();
    let repeated = 1;
    for (let word of arr) {        
        if (map.has(word)) {
            repeated = map.get(word) + 1;
        }
        map.set(word, repeated)
        repeated = 1;
    }
    
    let sorted = Array.from(map)
    sorted.sort((a, b) => b[1] - a[1])
 
    for (let [word, repeatedNumber] of sorted) {
        console.log(`${word} -> ${repeatedNumber} times`);
    }
}

wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])

