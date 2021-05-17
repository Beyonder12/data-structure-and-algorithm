





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
