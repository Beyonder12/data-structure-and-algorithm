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
