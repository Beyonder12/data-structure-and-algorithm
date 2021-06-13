var makeEqual = function(words) {
  let hash = {};
  if (words.length === 1) return true;
  for(w of words) for(c of w) hash[c] = (hash[c] + 1) || 1;
  console.log(hash)
  for(h in hash) if(hash[h] % words.length !== 0) return false;

  return true;
  // console.log(hash)
};
words = ["abc","aabc","bc"]
words1 = ["abbab"]
words2 = ["ab","a"]

console.log(words, makeEqual(words))
console.log(words1, makeEqual(words1))
console.log(words2, makeEqual(words2))
