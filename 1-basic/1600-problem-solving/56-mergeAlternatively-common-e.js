/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let word = ''
    for(let i = 0, j = 0; i < word1.length || j < word2.length; i++,j++) {
        if(word1[i]) word += word1[i];
        if(word2[j]) word += word2[j];
    
    }
    return word;
  };