var decode = function(encoded) {
    const n = encoded.length + 1;
    const perm = Array(n);
    for (let i = 1; i <= n; i++) { perm[0] ^= i};
    for (let i = 1; i < n - 1; i += 2) {perm[0] ^= encoded[i]}
    for (let i = 1; i < n; i++) { perm[i] = perm[i - 1] ^ encoded[i-1] }
    return perm;
}

console.log(decode([1,2]));
console.log(decode([2,1]));

// Input: encoded = [3,1]
// Output: [1,2,3]
// Explanation: If perm = [1,2,3], then encoded = [1 XOR 2,2 XOR 3] = [3,1]