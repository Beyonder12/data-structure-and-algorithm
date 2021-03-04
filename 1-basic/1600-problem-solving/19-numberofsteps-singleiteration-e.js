/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let count = 0;
    while(num) {
        (num%2===0) ? num/=2 : num--;
        count++;
    }
    return count;
};
console.log(numberOfSteps(14))


/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    if(!num) return 0;
    let res = 0;
    while(num) {
        res += (num & 1) ? 2 : 1;
        num >>= 1;
    }
    return res - 1;
};
console.log(numberOfSteps(14))


// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.