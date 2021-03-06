/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1, sum = 0, remain;
    while(n) {
        remain = n%10;
        product *= remain;
        sum += remain
        n = Math.floor(n/10);
    }
    
    return product - sum;
    
};

console.log(subtractProductAndSum(234))