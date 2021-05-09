function substrCount(n, s) {
  let count = n;
  let currentSequence = s[0];

  for(let i = 1; i < n; i ++) {
    if (s[i] === s[i-1]) {
      count += currentSequence.length;
      currentSequence = currentSequence + s[i];
    } else {
      for(let j = 0; j < currentSequence.length; j++) {
        if(s[i + 1 + j] === currentSequence[0]) { count++; }
        else { break; }
      }
      currentSequence = s[i];
    }
  }
  return count;
}

console.log(substrCount(4,'aaaa'))
