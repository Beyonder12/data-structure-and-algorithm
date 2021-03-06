let moveZeroes = (nums) => {
    let numsLength = nums.length;
    if (numsLength < 2) return;

    let i = 0, j =0;

    while (j < numsLength) {
        if (nums[i] === 0) {
            while (nums[j] === 0 && j < numsLength) {
                j++;
            }
            if (j < numsLength) {
                tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
        i++;
        j++;
    }
    return nums;
}

console.log(moveZeroes([1,0,12,0,2]));