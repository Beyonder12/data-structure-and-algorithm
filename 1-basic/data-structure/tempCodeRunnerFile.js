var maxProfit = function(prices) {
  let max=0;
  for(let i = 0; i < prices.length; i++) {
    
      for(let j = i+1; j < prices.length; j++) {
          diff = prices[j] - prices[i];
          // console.log(diff)
          if(max < diff) max = diff;
      }
  }
  return max;
};

console.log(maxProfit([7,1,5,3,6,4]))

console.log(57+81)