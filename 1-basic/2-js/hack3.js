function hourglassSum(arr) {
  let max = 0;
  for(let i = 0; i < arr.length - 2; i++) {
      let sum = 0;
      for (let j = 0; j < 3; j++) {
          sum += arr[i][j] + arr[i+1][j] + arr[i+2][j];
          sum += arr[i+1][j+1] ;
          sum += arr[i][j+2] + arr[i+1][j+2] + arr[i+2][j+2];
      }
      console.log(sum)
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
