const removeDuplicates = s => {
    const s2 = s.replace(/(.)\1/g, '');
    return s2.length === s.length ? s : removeDuplicates(s2);
  };

  s = "aababaab"
  s2 = s.replace(/(.)\1/g, '');
  console.log(s2) 
// s = str.split("");
// console.log(s.shift())
// console.log(s)
// console.log(removeDuplicates(str))