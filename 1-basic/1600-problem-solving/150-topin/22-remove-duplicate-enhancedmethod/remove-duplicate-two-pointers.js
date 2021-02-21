var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i])
            nums[++i] = nums[j];

    }
    console.log(nums)
    return ++i;
}

console.log(removeDuplicates([1,2,2,2,2,3,4,5,5,5,5]))

// let a = [1,2,3]
// let b=0;
// console.log(a[++b]); 