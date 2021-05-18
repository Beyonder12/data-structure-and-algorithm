

function combinations(arr) {
  if(arr.length === 0) return [[]];
  let firstEl = arr[0], rest = arr.slice(1);

  combsWithoutFirst = combinations(rest);
  combsWithFirst = []

  combsWithoutFirst.forEach(comb => {
    combWithFirst = [...comb, firstEl]
    combsWithFirst.push(combWithFirst)
  })

  return [...combsWithFirst, ...combsWithoutFirst]
}

let arr = [1, 2, 3]
console.log(combinations(arr))
//time complexity: O(2^n)
//space complexity: O(2^n)


function permutations(arr) {
  if(arr.length === 0) return [[]];

  const firstEl = arr[0];
  const rest = arr.slice(1);

  const permsWithoutFirst = permutations(rest);
  const allPermutations = [];

  permsWithoutFirst.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [...perm.slice(0,i), firstEl, ...perm.slice(i)];
      allPermutations.push(permWithFirst);
    }
  });

  return allPermutations;

}

console.log(permutations(arr))
