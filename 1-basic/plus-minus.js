function plusMinus(arr) {
  let pos = 0, neg = 0, zero = 0;

  let l = arr.length;
  for (let i = 0; i < l; i++) {
    if (arr[i] > 0) pos++;
    if (arr[i] == 0) zero++;
    if(arr[i] < 0) neg++;
  }
  console.log ((pos/l).toFixed(6) + '\n' + (neg/l).toFixed(6) + '\n' + (zero/l).toFixed(6));
}

plusMinus([1,2,3,-2])
