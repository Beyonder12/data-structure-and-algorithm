const sumBase = (n, k) => {
    let res = n.toString(k);
    let sum = 0;
    for (const e of res) sum += Number(e);
    return sum;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var sumBase = function(n, k) {
    
    let sNum = parseInt(n+'', 10).toString(k), sum = 0;

    for (let i = 0; i < sNum.length; i++) {
        sum += Number(sNum[i])
    }
    return sum;
};

// Input: n = 34, k = 6
// Output: 9
// Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.