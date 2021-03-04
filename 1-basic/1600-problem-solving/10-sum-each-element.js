/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var runningSum = function(nums) {
     let a = [];
     for(let i = 0; i < nums.length; i++) {
         sum = 0;
         for(let j = 0; j <= i; j++) {
             sum += nums[j];
         };
         a.push(sum);
     };
     return a;
 };

 console.log(runningSum([1,2,3,4,5]));

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// const runningSum = nums => {
//     nums.reduce((a,c,i,arr) => arr[i] += a)
//     return nums
// }