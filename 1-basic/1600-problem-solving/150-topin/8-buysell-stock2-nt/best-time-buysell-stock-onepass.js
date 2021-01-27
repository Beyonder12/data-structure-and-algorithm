function maxProfit(nums) {
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i+1] > nums[i]) max += nums[i+1] - nums[i];
    }
    return max;
}