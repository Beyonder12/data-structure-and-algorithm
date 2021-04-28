/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
    let effort = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= nums[i+1]) {
            effort += (nums[i] - nums[i+1] + 1);
            nums[i+1] = nums[i] + 1;
        }
    }
    return effort;
  };

  var minOperations1 = function(nums) {
    let operation = 0;
    const operations = nums.reduce((acc, curr, index, arr) => {
        if (curr <= arr[index - 1]) {
            operation += arr[index - 1] - curr + 1;
            arr[index] = arr[index] + arr[index - 1] - curr + 1;
        }
    })
    
    return operation
};

// Input: nums = [1,1,1]
// Output: 3
// Explanation: You can do the following operations:
// 1) Increment nums[2], so nums becomes [1,1,2].
// 2) Increment nums[1], so nums becomes [1,2,2].
// 3) Increment nums[2], so nums becomes [1,2,3].