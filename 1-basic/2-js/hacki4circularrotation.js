function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
      a.unshift(a.pop())
  }
  return a;

}

console.log(rotLeft([1,2,3,4,5],4))


// b = [1,2,3,4,5]

// for(let i = 0; i < 4; i++) {
//   b.unshift(b.pop())
// }
// console.log(b)
