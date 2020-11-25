function modifyArray(nums) {
    return nums.map(e => e & 1 ? e * 3 : e * 2);
}

console.log(modifyArray([1,2,3]))

function getMaxLessThanK(n, k) {
    return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
}
