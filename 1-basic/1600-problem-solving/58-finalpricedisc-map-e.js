/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
    let a = [];
    for(let i = 0; i < prices.length; i++) {
        for(let j = i+1; j < prices.length; j++) {
            if(prices[i] >= prices[j]) {
                a.push(prices[i] - prices[j]); break;
            } 
            if (j === prices.length - 1) a.push(prices[i])
        }
    }
    a.push(prices[prices.length - 1])
    
    return a;
  };
  
  const finalPrices = prices => {
    const checker = (x, arr) => {
    const discount = arr.find(el => el <= x)
    return discount ? x - discount : x
  }    
  return prices.map((p, i, arr) => checker(p, arr.slice(i + 1)))
  } 
  
  
  // Input: prices = [8,4,6,2,3]
  // Output: [4,2,4,2,3]
  // Explanation: 
  // For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4. 
  // For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2. 
  // For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4. 
  // For items 3 and 4 you will not receive any discount at all.