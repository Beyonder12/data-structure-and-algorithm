// var missingNumber = function(nums) {
  
//       nums.sort( a-b);
//       for (let i = 0; i <= nums.length; i++) {
//         if(i!=nums[i]) return i;
//       }
    
//       return nums;
      
//     };
    
//     let nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
//     console.log(JSON.stringify(missingNumber(nums)))

/*
var missingNumber = function(nums) {
    // construct array of size n+1, to leave a spot for the missing element.
    // Assign each val to -1 so we can see which position was not filled
    // O(n)

    const res = new Array(nums.length+1).fill(-1);

    // "sort" the elements by assigning to the array based on val
    // O(n)
    for(const num of nums) {
        res[num] = num;
    }

    // the remaining -1 index is the missing value
    // O(n-1)
    return res.indexOf(-1);
};

*/

function missingNumber(nums) {
    let res = nums.length;

    for (let i = 0; i < nums.length; i++) {
        res ^= i;
        res ^= nums[i];
        // res = res ^ i ^ nums[i];
    }   
    return res;
}


let nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
console.log(JSON.stringify(missingNumber(nums)))
