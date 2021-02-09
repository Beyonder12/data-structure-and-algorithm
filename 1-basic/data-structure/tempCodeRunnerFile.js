var countAndSay = function(n) {
  var str = '1';
  for (var i=1; i < n; i++) {
      var strArray = str.split('');
      str ='';
      var count = 1;
      // Loop through current nth level line
      for (var j=0; j < strArray.length; j++) {
          // Next digit is different
          if (strArray[j] !== strArray[j+1]) {
              // Go to next non-matching digit
              str += count + strArray[j];
              count = 1;
          }
          else {
              count++;
          }
      }
  }
  return str;
};

console.log(countAndSay(5)) 