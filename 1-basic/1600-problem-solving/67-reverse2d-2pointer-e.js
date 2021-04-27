/**
 * 
 * @param {strig} s 
 * @returns {string}
 */

var reverseWords = function(s) {
    
    let a = [];
    s = s.split(" ");
    console.log(s)
    for(e of s) {
      (a.push(e.split('').reverse().join('')))
    };
  
    
    return a.join(' ');
  };

  var reverseWords1 = function(s) {
      let res = '';
      let word = '';
      for (let c of s) {
          if (c === ' ') {
              res += word + c;
              word = '';
          } else {
              word = c + word;
          }
      }
      return res + word;
  };

  let reverse = (start, end, array) => {
      while(start < end) {
          let temp = array[start];
          array[start] = array[end];
          array[end] = temp;
          start++;
          end--;
      }
  }

  var reverseWords2 = function(s) {
      let copy = [...s];
      let i = 0; j = 0;
      while( j < s.length) {
          if (copy[j] === ' ') {
              reverse(i, j - 1, copy);
              i = j + 1;
          }
          j++;
      }
      reverse(i, s.length-1,copy);
      return copy.join('');
  }

  s = "Let's take LeetCode contest"

  console.log(reverseWords(s))
console.log(reverseWords1(s))
console.log(reverseWords2(s))