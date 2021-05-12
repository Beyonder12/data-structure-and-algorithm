function quickSort(arr) {
  let left = [];
  let right = [];
  let pivot = arr[0];
  equals = [pivot]

  for (let i = 1; i < arr.length; i++) {
   let value = arr[i]
    if(pivot > value) left.push(value)
    else if (pivot < value) right.push(value)
    else equals.push(value)
  }
  return left.concat(equals.concat(right))
}

console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2,1]))
