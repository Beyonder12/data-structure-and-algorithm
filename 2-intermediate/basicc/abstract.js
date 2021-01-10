var majorityElement = function (nums) {
  let obj = {};
  let best;
  let temp = -Infinity; 
  
  nums.forEach((elem) => {
    obj[elem] = ++obj[elem] || 1;
  })

  for (let key in obj) {
    temp = Math.max(temp, obj[key]);
    if (obj[key] >= temp) {
      best = key;
    }
  }
  return best;

};
console.log(majorityElement([2,1, 2, 0, 2, 3, 3, 3]))
console.log(Math.max([1,8, 9, 2]));
