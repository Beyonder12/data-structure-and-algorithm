function miniMaxSum(arr) {
  a = arr.sort();
  amin = 0, amax = 0, l = arr.length;
  for(let i = 0; i < l-1; i++) {
    amin+=arr[i];
    amax+=arr[l-i-1];
  }
  return console.log([amin,amax]);

}

miniMaxSum([1,2,3,4,5])
