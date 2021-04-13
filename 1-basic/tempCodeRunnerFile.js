var findNumbers = function(nums) {
  let count = 0;
  for(val of nums) {
    
      if(JSON.stringify(val).length % 2 === 0) count++;
  }
  
  return count;
};

console.log(findNumbers([12,345,2,6,7896]))