var arraySign = function(nums) {
  return (nums.reduce((c,v) => c*v)) ? ((nums.reduce((c,v) => c*v) > 0) ? 1 : -1) : 0;
};

nums = [-1,-2,-3,-4,3,2,1]
console.log(arraySign(nums))