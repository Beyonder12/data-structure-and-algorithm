function maximumToys(prices, k) {

  // for (let i = 0; i < prices.length; i++) {
  //     for (let j = 0; j < prices.length - 1; j++) {
  //         if (prices[j] > prices[j+1]) {
  //             temp = prices[j];
  //             prices[j] = prices[j+1];
  //             prices[j+1] = temp;
  //         }
  //     }
  // }
  prices.sort((a,b) => a -b)
  console.log(prices)
  let sum = 0, count = 0;
  for(let p of prices) {
      sum += p;
      if (sum <= k) {
          count++;
      }
  }
  return count;

}
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
