const reverse = x => {
    const negative = x < 0 ? -1 : 1
    let output = 0
    x = Math.abs(x)
    while (x > 0) {
        const remainder = x % 10 
        output = output * 10 + remainder
        x = Math.floor(x / 10)
    }
    if (output > Math.pow(2,31)) return 0
    return output * negative
};
console.log(123)
console.log(reverse(123))

// /*

// /**
//  * @param {number} x
//  * @return {number}
//  */
// const reverse = function(x) {
//     const isNegative = x < 0;
//     x = Math.abs(x);
//     let result = 0;
    
//     while (x) {
//       const digit = x % 10;
//       x = Math.floor(x / 10);
//       result = result * 10 + digit;
//     }
    
//     // restrict result to maintain settled overflow
//     if (result > 2**31) {
//       return 0;
//     }
    
//     return isNegative ? -result : result;
//   };
// */