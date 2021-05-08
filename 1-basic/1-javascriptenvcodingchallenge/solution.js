let solution = n => {
    //F(0) - 0, F(1) - 1
    //F(n) - F(n - 1) + F(n - 2), for n > 1
  if(n === 0) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }

  return solution(n-2) + solution(n-1);
}

module.exports = solution;
