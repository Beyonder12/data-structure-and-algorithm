
function insertionSort(arr) {
  let n = arr.length;
  for(let i = 1; i < n ; i++) {
    let j = i;
    while(j > 0 && arr[j-1] > arr[j]) {
      temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
      j--;
    }

  }

  return arr;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))


a = [1,2,3,4,5]
b = a.splice(2)
a = a.slice(2);
console.log(a, b)

console.log(-2%2 + 0)
