 function runningSum(nums) {
  let a = [];

  for(let i = 0; i < nums.length; i++) {
    sum = 0;
    for(let j = 0; j <=i; j++) {
      sum+=nums[j]
    }
    a.push(sum);
  }

  return a;
}
console.log(runningSum([1,2,3]));