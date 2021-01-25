var twoSum = function(nums, target) {
    const arr = [];//array for storing parse values
    let i = 0;
    while (i < nums.length) {
        if (arr[ target - nums[i] ] != undefined) return [ arr[target - nums[i] ], i];
        arr [ nums[i] ] = i; //adding parse value to array
        i++
    }
}