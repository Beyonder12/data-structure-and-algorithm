/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
  let max1 = 0, max0 = 0;

  s1 = s.split('0');
  for(e of s1) max1 = Math.max(max1, e.length);
  s0 = s.split('1');
  for(e of s0) max0 = Math.max(max0, e.length);
  console.log(s1,'-----',s0)
  return max1>max0;




};

checkZeroOnes("110100010")

console.log('fe')


let map = new Map();

console.log(map.prototype.get())
