/**
 * 
 * @param {number [][]} mat 
 * @returns {number}
 */

var diagonalSum = function(mat) {
    let sum = 0;
    for(let i = 0; i < mat.length; i++) {
        console.log(mat.length - 1 - i)
        // console.log(mat[i][i])
        // console.log(mat[i][mat.length - 1 - i])
        if (i === mat.length - 1 - i) {sum += mat[i][i]; continue;}
        else {
          sum += mat[i][i];
          sum += mat[i][mat.length - 1 - i]
        }
    }
    
    return sum;
    
  };
  
  
  // mat = [[1,2,3,4],
  //       [5,6,7,8],
  //       [9,10,11,12],
  //       [13,14,15,16]]
  
  mat = [[1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1]]
  
  console.log(diagonalSum(mat))