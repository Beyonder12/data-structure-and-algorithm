rome = function(s) {
    s.filter(e=>Number(Number.isInteger(e)));
    
    return s;
};

console.log(['123', 'a', 'b', '2'])

console.log(Number.isInteger('1'))

function isLetter(str) {
     return (str.length === 1 && str.match(/[a-z]/i)) ? true: false;
  }

  console.log(isLetter('a'))