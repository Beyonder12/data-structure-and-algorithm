/**
 * 
 * @param {string} s 
 * @return {number}
 */

var maxDepth = (s) => {
    let l = 0, r = 0;
    return s.split('').reduce((depth, c) => {
        if (c === '(') l++;
        if (c === ')') r++;
        return Math.max(l-r, depth)
    }, 0)
}
console.log(maxDepth(s = "(1+(2*3)+((8)/4))+1"));

var maxDepth = (s) => {
    let str = s.match(/[()]/g, "")
    let balance = 0;
    console.log(str);
    if (!str) return 0;

    return str.reduce((depth, c) => {
        c === '(' ? balance++ : balance--;
        console.log(depth)
        return Math.max(balance, depth);
    },0)
}

console.log(maxDepth(s = "(1+(2*3)+((8)/4))+1"));

var maxDepth = function(s) {
    const stack = [];
    let maxDepth = 0;
    
    for (let i = 0; i < s.length; i += 1) {
      if (s[i] === '(') {
        stack.push(s[i]);
        
        maxDepth = Math.max(maxDepth, stack.length);
      }
      
      if (s[i] === ')') {
        stack.pop();
      }
    }
    
    return maxDepth;
  };