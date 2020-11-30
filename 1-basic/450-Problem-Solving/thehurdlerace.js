
const hurdleRace = (k, height) => {
    let negDif = height.filter(h => ((k -h) < 0) ? ((k -h) < 0) : 0 );
    if((Math.max(...negDif) - k) == -Infinity) {
        return 0
    }
    else {
        return Math.max(...negDif) - k;
    }

}

// return Math.max(0, Math.max(...height) - k);
