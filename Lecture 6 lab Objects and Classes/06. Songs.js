function solve(input){

    class Song{
        constructor(typelist, name, time){
            this.typelist = typelist
            this.name = name
            this.time = time
        }
    }

    let songs = []
    let numberOfSongs = input.shift()
    let desiredType = input.pop()
    for(let i = 0; i < numberOfSongs; i++){
        let [musicType, musicName, musicTime] = input[i].split("_")
        let song = new Song(musicType, musicName, musicTime)
        songs.push(song)
    }

    if(desiredType === "all"){
        songs.forEach((x) => console.log(x.name))
    }else{
        let filtered = songs.filter((x) => x.typelist === desiredType)
        filtered.forEach((x) => console.log(x.name))
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )