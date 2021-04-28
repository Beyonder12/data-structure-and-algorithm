/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    let set = new Set();
    for(let c of sentence) {
        set.add(c)
    }
    
    return set.size === 26;
    
        
    
  };
  
  
  var checkIfPangram = function(sentence) {
    return new Set(sentence.split("")).size == 26;
  };
  
  /**
   * @param {string} sentence
   * @return {boolean}
   */
   var checkIfPangram = function(sentence) {
    let res = {}
    for(const char of sentence){
        res[char] = ++res[char] || 1;
    }
    if(Object.entries(res).length < 26) return false
    return true;
  };
  
  function checkIfPangram(sentence) {
    const alpha = new Set('abcdefghijklmnopqrstuvwxyz');
    
    for (const char of sentence) {
      alpha.delete(char);
      if (alpha.size === 0) return true;
    }
    
    return false;
  }
  
  // Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
  // Output: true
  // Explanation: sentence contains at least one of every letter of the English alphabet.