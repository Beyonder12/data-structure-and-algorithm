function viralAdvertising(n) {
    var n , i =1, shared=5, liked=2, acc=2;
    while ( i < 2) {

        shared = Math.floor(3*liked)
        liked = Math.floor(shared/2)
        i++; acc+=liked;
    }
    return acc;

}

console.log(viralAdvertising())
