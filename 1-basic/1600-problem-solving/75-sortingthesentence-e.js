/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
  let obj = {}, res='';
  s = s.split(' ');
  for(e of s) obj[(e[e.length - 1])] = e.slice(0,e.length - 1);
  for(k in obj) res+=" "+obj[k]
  return res.slice(1);
};

a = 'abcde'
console.log(a.slice(1))
