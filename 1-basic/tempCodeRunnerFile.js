/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
  let count = 0;
  for (ele1 of grid) {
      for (ele2 of ele1) {
          if(ele2 < 0) count ++;
      }
  }
  return count;
};


/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
  let count = 0;
  for(const row of grid){
    const index = searchFirstNegativeIndex(row)
    count+= row.length - index;
  }
  return count
};

function searchFirstNegativeIndex(arr,target){
  let r = arr.length - 1;
  let l = 0;
  while(l <= r){
    const mid = Math.floor((l+r)/2)
    if(arr[mid] < 0){
      r = mid-1
    }else{
      l = mid+1
    }
  }
  return l
}

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.