x// var canReach = function(s, minJump, maxJump) {
//   let i = 0, n = s.length;
//   while(n--) {
//       (s[i+2] === '1') ? ((s[i+3] === '1') ? return false : i+=3) : (i+=2);
//       if(s[n-1]) return true
//   }
//   return (i === n-1);
// };


// var canReach = function(s, minJump, maxJump) {
//   let i = 0, n = s.length;
//   for(;i<n;) {
//       if(s[i+minJump] === '1')
//           if(s[i+maxJump] === '1') return false;
//           else i+=maxJump
//      if(s[i+maxJump] === '1') return false

//   }
//   console.log(i,n)
//   return (i === n-1);
// };


var canReach = function(s, minJump, maxJump) {
  let pos = 0, n = s.length;
  for(;pos<n-1;) {
      if(s[pos+minJump] === '1' && s[pos+maxJump] === '1') return false;
      if(s[pos+minJump] === '0') {
          pos+=minJump
      } else if(s[pos+maxJump] === '0') {
          pos+=maxJump
      } else {
        return false
      }
  }
  console.log(pos)
  return pos === n - 1

};
console.log(canReach("01101110", 2,3) ,'expcted', false)
console.log(canReach("011010", 2,3), 'expected', true)
let a = 0;
for (;a<3;) {
  console.log(a)
  a++
}
