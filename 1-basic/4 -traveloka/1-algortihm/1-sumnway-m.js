
// Top Down dynamic Programming
var combinationTopDownDynamicProgramming = function(N, T) {
  let dp = new Uint32Array(T+1)
  dp[0] = 1
  for(let i = 1; i <= T; i++)
    for (let num of N)
      if (num <=i) dp[i] += dp[i-num]
  return dp[T]
};

var combinationBottomUpDynamicProgramming = function(N, T) {
  let dp = Array(T+1).fill(0)
  // console.log(dp)
  dp[0] = 1
  for (let i = 0; i < T; i++) {

    if (!dp[i]) continue
    for (let num of N)
      if (num + 1 <= T) dp[i+num] += dp[i]
      // console.log(dp)
  }

  return dp[T]
}

// console.log(combinationTopDownDynamicProgramming([1,2], 7))
console.log(combinationBottomUpDynamicProgramming([1,2,3,4], 5))

//================================================================
var combinationSum4 = function(nums, target) {
  const n = nums.length;
  const memo = new Map();

  return topDown(target);

  function topDown(target) {
      // base cases
      if (target == 0) return 1;
      if (target < 0) return 0;
      if (memo.has(target)) return memo.get(target);

      let count = 0;

      for (let i = 0; i < n; i++) {
          const num = nums[i];
          if (num <= target) {
              const amountLeft = target - num;
              count += topDown(amountLeft);
          }
      }

      memo.set(target, count);
      return count;
  }
};

// console.log(combinationSum4([1,2,3], 4))
//================================================================

function countWays(n,target) {
  let table = new Array(n + 1);

  for(let i = 0; i < n+1; i++) {
    table[i] = 0;
  }

  table[0] = 1;

  for (let i = 1; i < n; i++) {
    for(let j = i; j <= n; j++) {
      if(target >= table[j]) table[j] = table[j] + table[j-i]
    }
  }
  console.log(table)
  return table[n]
}

console.log(countWays(5))
// Input : n = 5
// Output : 6
// Explanation : All possible six ways are :
// 4 + 1
// 3 + 2
// 3 + 1 + 1
// 2 + 2 + 1
// 2 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 1

// Input : 4
// Output : 4
// Explanation : All possible four ways are :
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1

function getSubsetSum(nums, target) {
  if(target === 0) return 1;
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if(target >= nums[i])
      result = result + getSubsetSum(target - nums[i])
  }

  return result;
}
