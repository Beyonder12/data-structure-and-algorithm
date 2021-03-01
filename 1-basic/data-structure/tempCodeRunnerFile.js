var countConsistentStrings = function(allowed, words) {
  let obj = {}, objs = [], count = 0;
  
  for(val of allowed) {
      obj[val] = ++obj[val] || 1;
  }

  for(let i = 0; i < words.length; i++) {
    for(let j = 0; j < words[i].length; j++) {
      for(key in obj) {
        if (key !== words[i][j]) {count++; i++;}
      }
    }
  }
  console.log(count)
  return count;
};

 
// console.log(countConsistentStrings('ab',["ad","bd","aaab","baa","badab"]))
let set = new Set();

set.add(10)
set.add(10)
console.log(set.has(10))