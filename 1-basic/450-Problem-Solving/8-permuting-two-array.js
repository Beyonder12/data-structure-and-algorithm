function twoArrays(k, A, B) {
  var isPossible = true;
  A = A.sort((a,b) => a - b);
  B = B.sort((a,b) => b - a);
  for(let i = 0; i < A.length; i++) {
    if(A[i] + B[i] < k) {
      isPossible = false;
      break;
    }
  }

}
