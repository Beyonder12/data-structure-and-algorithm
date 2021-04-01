/**
 * 
 * @param {string[]} word1 
 * @param {string[]} word2 
 * @return {boolean}
 */

var arrayStringsAreEqual = function(word1, word2) {
    
    let s1 = "";
    for(let i of word1) 
        s1 += i;
    
    let s2 = "";
    for(let i of word2) 
        s2 += i;
    
    return (s1 === s2);
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))