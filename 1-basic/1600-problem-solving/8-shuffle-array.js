/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

 var shuffle = function(nums, n) {
     let  a = [];
     for (let i = 0; i < n; i++) {
         a.push(nums[i], nums[i+n]);
     }
     return a;
 };

 console.log(shuffle([1,2,3,4, 4,3,2,1], 4))