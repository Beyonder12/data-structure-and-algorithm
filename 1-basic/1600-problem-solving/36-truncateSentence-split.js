
/**
 * 
 * @param {string} s 
 * @param {number} k 
 * @returns number
 */

const truncateSentence = (s, k) => {
    let spaceCount = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === ' ' && ++spaceCount === k) return s.slice(0, i);

    }
    return s;
}