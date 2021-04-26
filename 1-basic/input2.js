/**
 * @param {string} s
 * @return {number[]}
 */
 const diStringMatch = (S) => {
  let num = [];
  let inc = 0;
  let dec = S.length;
  let i = 0;
  while(num.length !== S.length+1){
      num[i] = S[i] === 'D'? dec--: inc++;
      i++;
  }
  return num;
};

Input: s = "IDID"
Output: [0,4,1,3,2]

console.log(diStringMatch(s))