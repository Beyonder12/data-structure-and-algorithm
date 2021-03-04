/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

 var kidsWithCandies = function(candies, extraCandies) {
     let ans = [];
     for (let i = 0; i < candies.length; i++) {
         (candies[i] + extraCandies >= Math.max(...candies)) ? ans.push(true) : ans.push(false);
     };
     return ans;
 };

 console.log(kidsWithCandies([2,3,5,1,3], 3));

