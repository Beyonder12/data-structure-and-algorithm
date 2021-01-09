var majorityElement = function(nums) {
  let obj = {};
  let best;
  let temp = -Infinity;
  
  nums.forEach((elem)=> {
     obj[elem] = ++obj[elem] || 1; 
  })
  
  for (let key in obj){
    temp = Math.max(temp, obj[key]);
    if(obj[key] >= temp){
       best = key; 
    }
  }
  return best;
    
};
