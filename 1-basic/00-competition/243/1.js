var largestOddNumber = function(num) {
    while(num[num.length - 1] % 2 === 0) {
        num = num.substring(0,num.length-1)
    }

return num;

};

console.log('efe')
console.log(largestOddNumber("4206"))