/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let i = 0, j = 0, count = 0;
    while(jewels.length - i) {
        // console.log(i)
        i++;
        while(stones.length-j) {
            console.log(j)
           if (jewels[i] === stones[j]) count++;
           j++;
        }
    }
    
    // return count;
};

jewels = "aA", stones = "aAAbbbb"

console.log(numJewelsInStones(jewels, stones))