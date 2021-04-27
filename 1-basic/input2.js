/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
  return Number(x^y).toString(2).split('').reduce((a, b) => +a + +b);
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance1 = function(x, y) {
  let value = x ^ y;
  let counter = 0;
  
  while (value != 0) {
      if (value & 1)
         ++counter
      
      value = value >> 1
  }
  
  return counter
};


// After submitting my solution i started reading the discussion and saw some codes from submission page.
// But I failed to find the algo or the code similar to mine. So I thought about sharing it.

// Algo is simple :

// XOR the two numbers;
// Do a bitewise add(&) with 1; (1 is 000001 in base 2 so with add it would return 1 only if the last bit of XORed is 1)
// If (XORed & 1 == 1 )then counter++;
// right shift 1 position ;
// repeat above three until the XORed number becomes zero;
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
  let counter = 0;
  for(let i = x^y; i > 0; i = i >> 1){
      
  if(i & 1) counter++;}
  return counter;
};

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

var hammingDistance = function(x, y) {
  let output = 0;
  for (; x > 0 || y > 0; x = x >> 1, y = y >> 1) {
      output += (x & 1) ^ (y & 1);
  }
  return output;
};