// function repeatedString(s, n) {
//   let count = 0;
//   for(let i = 0; i < n; i++) {
//       if(s[i%(s.length)] === 'a') count++;
//   }
//   return count;

// }

function repeatedString(s, n) {
  let count = 0, extra=0;
  for(let i = 0; i < s.length; i++) {
      if(s[i] === 'a') count++;
  }
  for(let j = 0; j < n % s.length; j++) {
    if(s[j] === 'a') extra++;
}
  console.log('count',count)
  console.log('extra', extra)
  console.log('n', n)
  console.log('op', count*Math.floor(n/s.length))


  return (count*n/s.length) + extra;

}
console.log('return', repeatedString('aba', 10))
// console.log(repeatedString('a', 10000))


//O(n)
function repeatedString(s, n) {
  let c = 0,
      ca = 0,
      r = n % s.length

  for (let i = s.length; i-- > 0;) {
    if (s.charAt(i) == 'a') {
      ++c

      if (i < r)
        ++ca
    }
  }

  return ((n - r) / s.length * c) + ca
}
