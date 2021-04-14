var halvesAreAlike = function(s) {
  let alike = 0, vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  for(let i = 0 ; i < s.length; i++) {
    if(i < s.length/2 && vowels.includes(s[i])) {
      alike++ ;
    } else if (i >= s.length/2 && vowels.includes(s[i])) {
      alike--;
    }
    
    // console.log(vowels.includes(s[i]))
    // console.log(alike)
  }
 
  return alike === 0 ? true : false;
};

console.log(halvesAreAlike('book'))