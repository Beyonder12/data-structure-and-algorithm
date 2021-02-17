// there are three ways to solve this bit problem
// this function will give output = 2, where input = 0000000000000000000001000000000000000000001
// the constraint is 32 string bit

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

console.log(hammingWeight1(0001));
console.log(hammingWeight2(0101));
console.log(hammingWeight3(001));