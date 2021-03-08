/**
 * @param {string} s
 * @return {number}
 */

 var balancedStringSplit = function(s) {
     let ans = 0, c = 0;
     for(val of s) {
         if (val === 'R') c++;
         if (val === 'L') c--;
         if (c === 0) ans++;
     };
     return ans;
 };

 s = "RLRRLLRLRLL"
 console.log(balancedStringSplit(s))