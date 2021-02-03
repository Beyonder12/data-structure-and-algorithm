function digitOne(nums) {

  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i]++;
    if (nums[i] > 9) {
      nums[i] = 0;
    } else {
      return nums;
    }

  }
  nums.unshift(1);
  return nums;
}

console.log(digitOne([9, 9, 9]))