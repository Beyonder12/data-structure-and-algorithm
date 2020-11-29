function birthday(s, d, m) {
  let result = 0;

  for (let i = 0, l = s.length; i < l; i++) {
    if (s.slice(i, i + m).reduce((x,y) => x + y) === d) {
      result++;
    }
  }

  return result;
}

console.log(birthday([1,1,1,1,1], 3, 3))
