function sumZero(n) {
  let result = [], c = Math.ceil(-n / 2), sum = 0;
  for (let i = 0; i < n; i++) {

    result.push(c);
    sum += c;
    c++;
  }
  console.log(result.indexOf(0))
  if (n%2==0) { result.splice(result.indexOf(0),1,-sum); }
  return result;
}

console.log(sumZero(9))