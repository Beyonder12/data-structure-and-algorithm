/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let count = s.length;
    for (let i = 0, j =0 ; i < t.length; i++) {
        if(t[i] === s[j]) {count--; j++}
    }
    return (count === 0) ? true : false;
};