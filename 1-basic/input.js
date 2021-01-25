var twoSum = function(nums, target) {
  const arr = [];//array for storing parse values
  let i = 0; // counter
  while( i < nums.length ){
      //checking in current number exist in array or not
      if( arr[ target - nums[i] ] != undefined )  return [  arr[ target - nums[i] ], i ];
      arr[ nums[i] ] = i;//adding parse value to array
      console.log(arr)
      i++;//increamenting the counter
      
  }
};

let nums = [2,11,15,7], target = 9;

console.log(twoSum(nums, target));

a = [];

a[-2] = 0;
a[1] = 0;
console.log(a)
