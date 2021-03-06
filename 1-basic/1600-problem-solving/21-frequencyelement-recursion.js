// This is brute force method

/**
 * 
 * @param {number[]} nums 
 * @return {number[]} 
 */
var decompressRLElist = function(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i+=2) {
        while(nums[i]--) {
            arr.push(nums[i+1]);
        }
    } 
    return arr;
}

console.log(decompressRLElist([1,2,3,4]));

// This is the interesting recursion method 
/**
 * 
 * @param {number[]} nums 
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = [];
    function pushTo(count, num) {
        if (count === 0) return;
        arr.push(num);
        pushTo(count-1, num);
    }
    for (let i = 0; i < nums.length; i+=2) {
        pushTo(nums[i], nums[i+1]);
    }
    return arr;
};

console.log(decompressRLElist([1,2,3,4]));