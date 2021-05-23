/**
 * @param {number[]} nums
 * @return {number}
 */
 var subsetXORSum = function(nums) {
  let sum = 0;

  // function getSubArrays(arr){
  //       if (arr.length === 1) return [arr];
  //       else {
  //         subarr = getSubArrays(arr.slice(1));
  //         return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
  //       }
  //     }

  function getSubArrays(arr) {
      if (arr.length === 1) return [arr];
      else {
          subarr = getSubArrays(arr.slice(1));
          return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
      }
  }
  res = getSubArrays(nums)


  for(let i = 0; i < res.length; i++) {
      let xor = 0;
      for(let j = 0; j < res[i].length; j++) {
          xor ^= res[i][j];
      }
      sum += xor;

  }

  return sum;

};
let a = [1,4,5,2,5,4]
a.splice()
