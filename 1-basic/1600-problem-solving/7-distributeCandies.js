/*
var distributeCandies = function(candyType) {
    let obj = {};
    for (candy of candyType) {
        obj[candy] = ++obj[candy]||1; 
    }
    return (Object.keys(obj).length > candyType.length/2) ? candyType.length/2 : Object.keys(obj).length;
    
};
*/

/**
 * @param {number[]} candyType
 * @return {number}
 */

 var distributeCandies = function(candies) {
     return Math.min(new Set(candies).size, candies.length/2);
 };

 console.log(distributeCandies([1,1,2,2,3,3]))