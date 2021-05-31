var minPairSum = function(nums) {
  if(nums.length === 0) return [[]];
  let firstEl = nums[0];
  let rest = nums.slice(1);

  permsWithoutFirst = minPairSum(rest);
  allPermutations = [];

  permsWithoutFirst.forEach(perm => {
      for(let i =0; i <= perm.length; i++) {
          permWithFirst = [...perm.slice(0,i), firstEl, ...perm.slice(i)];
          allPermutations.push(permWithFirst)
      }
  })


  return allPermutations;
};


console.log(minPairSum(['a', 'b', 'c', 'd']))
let save = minPairSum(['a', 'b', 'c', 'd'])


var isSumEqual = function(firstWord, secondWord, targetWord) {
  let sum1 = 0, sum2 = 0, tot = 0;
  for(let e of firstWord) sum1 += e.charCodeAt() - 97;
  for(let e of secondWord) sum2 += e.charCodeAt() -97;
  for(let e of targetWord) tot += e.charCodeAt() - 97;
  console.log(sum1, sum2, tot)
  return (tot === sum1 + sum2) ? true : false;
};

console.log(isSumEqual("h","fhjfdghj","fhjfdgig"))


var maxValue = function(n, x) {
  let l = n.length, max = Number.MIN_SAFE_INTEGER ;
  for (let i = 0; i <= l; i++) {
      let nDin = n.split('');
      nDin.splice(i,0,x);
      nDin = Number(nDin.join(''))
      // if(nDin)res.push(nDin)
      if(nDin) max = Math.max(max, nDin)
  }
  console.log(max)
  return String(max);
  // console.log(res, max)
};

console.log(maxValue("962942516613939",
3))

let a = '123'
let b = '--1'
console.log(a<b)
