var containsDuplicate = function(nums) {
    count = {}
    for (c of nums) {
        count[c] = (count[c] || 0) + 1;
    }
   
    for (c in count) {
        if(count[c] > 1) return true;
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]));