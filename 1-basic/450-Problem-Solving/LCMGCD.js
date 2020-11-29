// there are array A and B
// find the LCM A, then GCD B
// then find the LCM element that is divisor of GCD element
// count the number

function getTotalX(a,b) {
  let validCount = 0;

  for (let i = 1; i <= 100; i++) {
    if (a.every(int => (i % int == 0))) {
      if (b.every(int => (int % i ==0))) {
        validCount++;
      }
    }
  }

  return validCount;
}

console.log(getTotalX([2,4], [16,32,96]))
