/*
var firstUniqChar = function(s) {
    obj = {};
    for (val of s) {
        obj[val] = ++obj[val] || 1;
    };
    for(key in obj) {
      
      if (obj[key] === 1) return s.indexOf(key);
    }
  
    return -1
  };
  
  let s = 'lleetcode';
  
  console.log(firstUniqChar(s));
*/


var firstUnique = function(s) {
    let map = {};

    for (let char of s) {
        map[char] ? map[char] ++ : map[char] = 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i;
    }

    return -1;
}
