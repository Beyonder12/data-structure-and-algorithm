/**
 * @param {number[][]} accounts
 * @return {number}
 */

 var maxIncome = function(accounts) {
     let max = 0;

     for (let i = 0; i < accounts.length; i++) {
         temp = accounts[i].reduce((c,v) => c+v);
         if(temp > max) max = temp;
     };
     return max;
 };

 console.log(maxIncome([[1,2,3], [3,2,1]]))