var repeatedNTimes = function(A) {
    let numMap = new Map()
    A.forEach((e,i,arr) => {
        numMap.set(e, numMap.get(e) + 1 || 1)
    })
    let res = 0;
    numMap.forEach((value, key) => {
      if(value>1) {res = key;}
    })
  
    return res;
  };
  
  var repeatedNTimes1 = function(A) {
    let lookup = new Set();
  
    for (let n of A) {
      if (lookup.has(n)) return n;
      lookup.add(n);
    }
  
    return -1;
  };
  console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));
  console.log(repeatedNTimes1([5,1,5,2,5,3,5,4]));
  