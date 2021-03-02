var climbStairs = function(n) {
    let temp;
    let prev = 0;
    let cur = 1;
    

    for (let i = 0; i < n; i++) {
        temp = prev;
        prev = cur;
        cur += temp;
    }
    return cur;
};

console.log(climbStairs(6))