/**
 * 
 * @param {number[]} nums 
 * @returns {number}
 */
var sumOfUnique = function(nums) {
  let obj = {}, sum = 0;
  for (ele of nums) {
      obj[ele] = ++obj[ele] || 1;
  }
  console.log(obj)
  
  for(key in obj) {
      if(obj[key] === 1) sum += Number(key);
  }
  
  return sum;
};


var sumOfUnique = function(nums) {
  let numMap = new Map(),
  curr = 0;
nums.forEach((n) => {
  numMap.set(n, numMap.get(n) + 1 || 1);
});
numMap.forEach((value, key) => {
  if (value === 1) {
    curr += key;
  }
});
return curr; 
};

nums = [1,2,3,2]

console.log(sumOfUnique(nums))