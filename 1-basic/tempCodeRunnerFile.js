var repeatedNTimes = function(A) {
  let numMap = new Map()
  A.forEach((e,i,arr) => {
      numMap.set(e, numMap.get(e) + 1 || 1)
  })
  let res = 0;
  numMap.forEach((value, key) => {
    if(value>1) {res = key; break;}
  })

  return res;
};