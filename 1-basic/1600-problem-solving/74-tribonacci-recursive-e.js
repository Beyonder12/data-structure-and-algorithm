var tribonacci = function(n) {
  console.log(n)
  if (mem[n] !== undefined) return mem[n];
  return mem[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

const mem = {
  0: 0,
  1: 1,
  2: 1
};

console.log(mem)
console.log(tribonacci(3))
console.log(mem)
