// function utopianTree(n) {
//   if(n==0) return 1;
//   if(n%2 == 0) return utopian(n-1)+1;
//   return utopianTree(n-1)*2;
// }

function utopianTree(n) {
  var h = 0;
  for (let i =0; i<=n; i++) {
    if (n==0) {return 1}
    if (i%2 == 0 && n>0) {h++}
    if (i%2 != 0 && n>0) {h*=2}
  }
  return h;
}


console.log(utopianTree(5))
