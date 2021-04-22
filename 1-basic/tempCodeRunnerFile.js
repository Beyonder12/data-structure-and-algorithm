var maxProduct = function(nums) {
  max1 = Math.max(...nums) ;
  nums.splice(nums.indexOf(max1), 1);
  max2 = Math.max(...nums) ;

  console.log(max1, max2)
  return --max1 * --max2
  console.log(nums)
  console.log(nums.indexOf(5))
  
};

nums = [3,4,5,2]

console.log(maxProduct(nums))