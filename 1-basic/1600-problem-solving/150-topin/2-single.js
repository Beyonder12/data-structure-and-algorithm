var singleNumber = function(nums) {
    const numCounts = {};

    for (x of nums) {
        if (x in numCounts) {
            numCounts[x]++;
        } else {
            numCounts[x]=1;
        };
    };

    for (num in numCounts) {
        if(numCounts[num] === 1) {
            return num;
        };
    };
};

console.log(singleNumber([1,5,2,2,3,3]));