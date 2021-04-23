var maxProduct = function(nums) {
  max1 = Math.max(...nums) ;
  nums.splice(nums.indexOf(max1), 1);
  max2 = Math.max(...nums) ;

  console.log(max1, max2)
  return --max1 * --max2
  console.log(nums)
  console.log(nums.indexOf(5))
  
};

// Since the integers in nums are in range [1, 10^3], the key to this problem is to find out the biggest and the second biggest number in nums.

// SOLUTION 1
// We use 2 variables to maintain our targets during the traversal of nums. It's pretty straight forward.
const maxProduct1 = nums => {
  let m1 = 0, m2 = 0;
  for (const val of nums) {
    m2 = Math.max(m2, Math.min(m1, val));
    m1 = Math.max(m1, val);
  }
  console.log(m1, m2)
  return (m1 - 1) * (m2 - 1);
};

// SOLUTION 2
// We use 2 pointers - one starts from 0 and the other one starts from nums.length - 1 - to traversal to the middle.

// During the traversal, we maintain current biggest number in i or j. If i is smaller, we do ++i. If j is smaller, we do --j.

// So, when the traversal finished, we must have met this situation - the biggest number and the second biggest number have been in i and j.
const maxProduct2 = nums => {
  let max = 0;
  for (let i = 0, j = nums.length - 1; i < j;) {
    max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
    nums[i] < nums[j] ? ++i : --j;
  }
  return max;
};

const maxProduct3 = (nums, max = nums.reduce((prev, val) => [Math.max(prev[1], Math.min(prev[0], val)), Math.max(prev[0], val)], [0, 0])) => (max[0] - 1) * (max[1] - 1);

nums = [3,4,5,2]
nums1 = [3,4,5,2]
nums2 = [3,4,2,5]
nums3 = [3,4,2,5]

console.log(maxProduct(nums))
console.log(maxProduct1(nums1))
console.log(maxProduct2(nums2))
console.log(maxProduct2(nums3))
