function sherlockAndAnagrams(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
      let found = {};

      for (let j = 0; j + i <= s.length; j++) {
          let substr = s.substr(j, i);
          if (substr) {
              substr = substr.split('').sort().join('');
              if (found[substr]) {
                  count += found[substr];
                  found[substr]++;
              } else {
                  found[substr] = 1;
              }
          }
      }
  }

  return count;
}

s = 'abba'
s1 = 'abcd'

console.log(sherlockAndAnagrams(s))
console.log(sherlockAndAnagrams(s1))
