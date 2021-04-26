heights = [1,1,4,2,1,3]


/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
  let expected = [...heights], count = 0;
  
  expected.sort((a,b) => a - b);
  
  for (let i = 0; i < heights.length; i++) {
      if(heights[i] !== expected[i]) count++;
  }
  console.log( expected)
  console.log( heights)
  return count;
 
};

const heightChecker1 = heights => {
    const count = new Int8Array(101);
    for (let i = 0; i < heights.length; ++i) ++count[heights[i]];
    let ret = idx = 0;
    for (let i = 0; i < 101; ++i) {
        while (count[i]--) heights[idx++] !== i && ++ret;
    }
    return ret
};

console.log(heightChecker(heights));
console.log(heightChecker1(heights));

a = b = c = 100;

console.log(a,b,c)