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

function substrCount(n, s) {
  let count = 0;
  for (var i = 0; i < n - 1; i++) {
      if (s[i] === s[i+1]) {
          let adder = 1;
          let j = i + 1;
          while (j < n && s[i] === s[j]) {
              count++;
              adder++;
              j++;
          }
          if (j + 1 < n - adder) {
              if (s.substr(j+1, adder) === s.substr(i, adder)) {
                  count++;
              }
          }
      }
      else if (s[i] === s[i+2]) count++;
  }
  return count + n;
}


function substrCount(n, s) {
  let count = n;
  for (let i = 0; i < s.length; i++) {
      let nextIndex = i;
      while (s[i] === s[nextIndex + 1]) nextIndex++;

      if (i !== nextIndex) {
          const length = nextIndex - i;
          count = count + (length * (length + 1)) / 2;
          i = nextIndex;
      } else {
          let step = 1;
          while (s[i + step] === s[i - step] && s[i + step] === s[i + 1]) {
              step++;
              count++;
          }
      }
  }
  return count;
}
