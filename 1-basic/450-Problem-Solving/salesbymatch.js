function sockMerchant(n,ar) {
  var res = 0;
  ar.sort()
  for (let i=0; i<n; i++) {
    if(ar[i] == ar[i+1]) {
      i++; res++; console.log(i)
    }
  }
   console.log(res);
}
sockMerchant(5,[1,1,2,3,2])

console.log(Math.min(2,3))
