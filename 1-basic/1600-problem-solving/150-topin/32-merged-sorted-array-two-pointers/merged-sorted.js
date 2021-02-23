/*
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n,...nums2);
    return nums1.sort((a,b) => a-b);
};
*/




//BST

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*
 var merge = function(nums1, m, nums2, n) {
     nums1.splice(m, n); // For removing tailing zeros
     let corrPosition = 0;
     for (let i = 0; i < n; i++) {
         corrPosition = binarySearch(nums1, corrPosition, nums1.length - 1, nums2[i]); // Since nums1 also a sorted array, we can compress our search space.
         nums1.splice(corrPosition, 0, nums2[i]);
         //console.log(nums1);
     }
     return nums1;

 };

 var binarySearch = (arr, left, right, item) => {
     // console.log(arr, left, right, item);
     while(left <= right) {
         let mid = parseInt((left + right) / 2);
         if (arr[mid] > item) {
             right = mid - 1;
         } else if (arr[mid] < item) {
             left = mid + 1;
         } else {
             return mid;
         }
     }
     return left;
 }

 console.log(merge([6,8,13,0,0,0], 3, [2,5,6], 3));
 console.log(merge([6,8,13,0,0,0], 3, [2,15,26], 3));
 */

 //2 pointers

 var merge = function(nums1, m, nums2, n) {
     // cur is the last index of nums1 array

     let cur = m+n-1;

     // we wanna do this if we have elements in both the arrays
     while(m>0 && n > 0) {
         if(nums1[m-1] < nums2[n-1]) {
             nums2[cur] = nums2[n-1];
             n--;
         }
         else {
             nums1[cur] = nums1[m-1];
             m--;
         }
         cur--;
     }

     // if there are no elements in nums1 then we add all nums2 to nums1

     while(n > 0) {
         nums1[cur] = nums2[n-1];
         n--; cur--;
     }

     //we do not wanna return anything;)
     return nums1;
 };

 console.log(merge([6,8,13,0,0,0], 3, [2,5,6], 3))