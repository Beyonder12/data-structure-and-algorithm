function pickingNumbers(a) {
    let maxcount = 0;
    [...new Set(a)].forEach(x => {
        maxcount = Math.max(maxcount,
            a.reduce((c,v) => c+= (v === x || v === x + 1), 0));
    })
    return maxcount;
}


console.log(Math.max(1,2));