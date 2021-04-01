/**
 * 
 * @param {number[]} arr 
 * @returns 
 */

var sumOddLengthSubarrays = function(arr) {
    const odd = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        odd.push(arr[j]);
        if (odd.length % 2 !== 0) {
          for (let val of odd) {
            count += val;
          }
        }
      }
      odd.length = 0;
    }
    return count;
  };

  console.log((2 && undefined))
  if (2 + 2) { 
      console.log(true)
  } else {
      console.log(1 + undefined)
  }