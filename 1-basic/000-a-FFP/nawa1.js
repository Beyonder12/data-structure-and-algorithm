

function vowel(input) {
  input = input.toLowerCase();
  map={}, ans="", ans2="";
 
  for(i of input) map[i] = (map[i] + 1) || 1;
  
  for(k in map) {
    if(k ==='a' || k ==='i' || k ==='u'|| k ==='e' || k ==='o') {
      while(map[k]--) ans+=k;
    } 
    else if(k == ' ') {
      map[k]--;
    }
    else {
      while(map[k]--) ans2+=k
    }
  }

  return ans;
}

function consonant(input) {
  input = input.toLowerCase();
  map={}, ans="";
 
  for(i of input) map[i] = (map[i] + 1) || 1;
  
  for(k in map) {
    if(k !=='a' && k !=='i' && k !=='u' && k !=='e' && k !=='o' && k !==' ') {
      while(map[k]--) ans+=k;
    } 
   
  }
 


  return ans;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Input one line of words (S) : ', input => {
  console.log("Vowel Characters: ");
  console.log(vowel(input));
  console.log("Consonant Characters: ");
  console.log(consonant(input));

  readline.close();
});
