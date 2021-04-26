var countBalls = function(lowLimit, highLimit) {
  var count = new Int8Array(10)
  
  for(let i = lowLimit; i <= highLimit; i++) {
      (i > 9) ? count[String(i).split('').reduce((c,v) => Number(c) + Number(v))] = ++count[String(i).split('').reduce((c,v) => Number(c) + Number(v))] || 1 : count[i] = ++count[i] || 1;
  };

  return Math.max(...count);
  
};

lowLimit = 1, highLimit = 10

console.log(countBalls(lowLimit, highLimit))

i = 11
// console.log(String(i).split('').reduce((c,v) => Number(c) + Number(v)))

console.log(2 ^ 10)