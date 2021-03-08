/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let ans = 0, c=0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] === 'R') c++;
        if(s[i] === 'L') c--;
        if (c === 0) ans++;
        
    }; 
    return ans;
}

s = "RLRRLLRLRLL"

console.log(balancedStringSplit(s))