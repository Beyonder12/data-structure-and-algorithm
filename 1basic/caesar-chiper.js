

console.log((function rot13(str) {
  let alphbt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let m_alphbt = alphbt.slice(13) + alphbt.slice(0,13); //NOPQRSTUVWXYZABCDEFGHIJKLM
  let result = []; // set empty array
  for(let i = 0; i < str.length; i++) {
    if(m_alphbt.indexOf(str[i]) != -1) { //index of -1 implies no such element in the index
      result.push(alphbt[m_alphbt.indexOf(str[i])]); //
    }
    else {
      result.push(str[i]) // if the str is not capital alphabet, it will return as initial
    }
  }
  return result.join('');
})("GUR ORLBAQRE")) //this is for capital only. it will return THE BEYONDER
