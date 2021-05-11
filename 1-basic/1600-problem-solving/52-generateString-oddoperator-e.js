/**
 * @param {number} n
 * @return {string}
 */
 var generateTheString = function(n) {
    let ans = ''
    for(let i = 0; i < n; i++) {
        if(!(n & 1)) (i === n-1) ? ans += 'z' : ans += 'p';
        else ans += 'p'
    }
    return ans;
  };