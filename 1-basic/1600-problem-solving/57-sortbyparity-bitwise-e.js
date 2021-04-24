/**
 * @param {number[]} A
 * @return {number[]}
 */
 var sortArrayByParity = function(A) {
    let res1 = [], res2 = [];
    for(ele of A) {
        (!(ele & 1)) ? res1.push(ele) : res2.push(ele);
        
    }
    return res1.concat(res2);
  };

  var sortArrayByParity = function(A) {
    const temp = [];
    A.forEach(v => {
        v % 2 === 0 ? temp.unshift(v) : temp.push(v);
    })
    
    return temp;
};
//   Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.