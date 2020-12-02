/*
6
1 4 3 5 6 2

1 4 3 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 2 3 4 5 6


*/

function insertionSort2(n, arr) {
  if (!arr) return;

  for (let i = 1; i < arr.length; i++) {

    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        [arr[j], arr[j - 1]] = [arr[j-1], arr[j]]
      }
    }

    console.log(arr.join(" "))
  }
  
}
