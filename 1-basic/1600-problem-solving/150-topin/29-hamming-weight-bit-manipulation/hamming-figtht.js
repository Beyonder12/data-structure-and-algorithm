// there are three ways to solve this bit problem
// this function will give output = 2, where input = 0000000000000000000001000000000000000000001
// the constraint is 32 string bit
// count how much 1

var hammingWeight1 = function(n) {
    var count = 0;
    while(n) {
        if(n & 1 == 1) {
            count++;
        }
        n = n>>>1;
    }
    return count;
};

var hammingWeight2 = function(n) {
    var count = 0;
    while(n) {
        n &= n-1;
        count++;
    }
    return count;
}

var hammingWeight3 = function(n) {
    var count = 0;
    while(n) {
        n = (n&(-n))^n;
        count++;
    }
    return count;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight4 = function(n) {
    let sum = 0;
    
    while(n != 0) {

        sum += n & 1;
        n = n >>> 1;
       
    }
    
    return sum;
};

// console.log(hammingWeight1(0001));
// console.log(hammingWeight2(0101));
// console.log(hammingWeight3(001));
console.log(hammingWeight4(01110011));
// console.log(&1)