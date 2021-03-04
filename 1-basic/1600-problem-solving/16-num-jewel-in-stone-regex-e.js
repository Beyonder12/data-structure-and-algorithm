/**
 * 
 * @param {string} jewels 
 * @param {string} stones 
 * @return {number}
 */

jewels = "aA", stones = "aAAbbbb"
var numJewelsInStones = function(jewels, stones) {
    const REGEX = new RegExp(`[${jewels}]`, 'g');

    return stones.match(REGEX) ? stones.match(REGEX).length : 0;

};

console.log(numJewelsInStones(jewels, stones));//3


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let i = 0, count = 0;
    while(jewels.length - i) {
        let j = 0;
        while(stones.length-j) {
           if (jewels[i] == stones[j]) count++;
           j++;
        }
        i++; 
    }
    
    return count;
};

console.log(numJewelsInStones(jewels, stones));//3