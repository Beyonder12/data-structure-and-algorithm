// Recursive

var subsets = function(nums) {
	let res=[]                    // the final arr, which we will display
	let auxArr = [], i=0             // global vars

    function recur(nums,i,auxArr){
        if(i==nums.length) { res.push(auxArr); return } //operation of recursion will be upto i=n-1
													 // when it will hit, i==n, it will store the computed arr, in the final arr, and break(return)

		// take it
        recur(nums, i+1, [...auxArr, nums[i] ] ) //or, we can use 'aux.concat(nums[i])'

		// dont take
        recur(nums, i+1, auxArr)

    }

    recur(nums,i,auxArr) // passing the global variable declared already
    return res        // rerturn the final 2d arr


};
	        //               1 2 3
 		      //     		   /           \
 		      //         	1 			      []
          //      /     \           /.  \
          //   1 2	     1	       2.    []
          //   /  \	  	/ \       / \    / \
          // 123.   12. 13. 1.   23. 2. 3. [].

// Iterative
var subsets = function(nums) {
  let res = [[]], appendarr= []

  for(let num of nums){
      appendarr = []
      for(let entry of res){
          appendarr.push([...entry, num])
      }

      res.push(...appendarr)
  }

  return res

};


// 0 (Empty)             :         []
// 1 (Adding 1 to it)    :         [] [1]
// 2 (Adding 2 to it)    :         [] [1] [2] [1,2]
// 3 (Adding 3 to it)    :         [] [1] [2] [1,2] [3] [1,3] [2,3] [1,2,3]

//Bit Masking
var subsets = function(nums) {
  const result = [];
  result.push([]);   // handling the first case (i=0). for that, an empty arr should be there

  let size = nums.length

  for(let i = 1; i < (1<<size) ; i++){   // generating for range upto [(2^n)-1]
    let subset = [];
    let bitmask=0

      while(bitmask<size){
          if(i & (1 << bitmask)){           // if it exists (not zero)
              subset.push( nums[bitmask] );
          }
          bitmask++
      }
      result.push(subset)
  }
  return result
};
