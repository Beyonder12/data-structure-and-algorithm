// function minimumBribes(q) {
//   let min = Infinity;
//   for (let i = 0; i < q.length; i++) {
//       if(Math.abs((i + 1) - q[i]) > 2) return "Too chaotic";
//       min = Math.min(min, Math.abs((i+1) - q[i]))
//   }
//   return min;
// }

// q = [2, 1, 5, 3, 4]
// q = [2, 5, 1, 3, 4]

// console.log(minimumBribes(q))

function minimumBribes(q) {
  let swaps = 0;
  let min = q.length;
  for (var i = q.length - 1; i >=0; i--) {
    if(q[i] - (i+1) > 2) {
      return 'Too chaotic';
    }
    if(q[i] > i + 1) {
      swaps += (q[i] - (i+1));
    } else {
      if (min > q[i]) {
        min = q[i];
      } else if (q[i] != min) {
        swaps++
      }
    }
  }
  return swaps;
}

console.log(minimumBribes([1,2,5,3,4]))











