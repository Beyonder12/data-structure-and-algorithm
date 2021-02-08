var xorOperation = function(n, start) {
    let xor = 0 ;
    for (let i = 0; i < n; i++) {
        xor ^= start + 2 * i;
    }
    return xor;
}

//O(N) and O (1)
