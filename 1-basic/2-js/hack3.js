// 2D array with beautiful technique
function hourglassSum(arr) {
  let max = -Infinity, sum = 0;

  for(let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      sum = arr[i + 1][j + 1] ;
      for (let k = 0; k < 3; k++) {
        sum += arr[i][j + k];
        sum += arr[i + 2][j + k];
      }
      max = Math.max(sum, max)
    }
  }

  return max;

}

arr = [
  [1, 1, 1, 0, 0, 0,],
  [0, 1, 0, 0, 0, 0,],
  [1, 1, 1, 0, 0, 0,],
  [0, 0, 2, 4, 4, 0,],
  [0, 0, 0, 2, 0, 0,],
  [0, 0, 1, 2, 4, 0,],
]

console.log(hourglassSum(arr))
