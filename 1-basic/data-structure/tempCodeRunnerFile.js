/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0) return false;
  let y = x, res = 0;
  while(y) {
      remain = y % 10;
      res = res*10 + remain; 
      y = Math.floor(y /10);
  }
  
  return x === res;
  
};

console.log(isPalindrome(-121))

// x = 123;
// y = Math.floor(x /10);
// console.log(y)
// y = Math.floor(x /10);
// console.log(y)

