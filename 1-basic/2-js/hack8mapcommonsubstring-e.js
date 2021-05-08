function twoStrings(s1, s2) {
  let map1 = {}, map2 = {};
  for (let i of s1) {
      map1[i] = (map1[i] || 0) + 1
  }
  for (let i of s2) {
      map2[i] = (map2[i] || 0) + 1
  }
  for (let k1 in map1) {
    for (let k2 in map2) {
      if(k1 === k2) return 'YES'
    }
  }

  return 'NO';
}

function twoStrings2(s1, s2) {
  let hashMap = {};

  for(let char of s1){
      hashMap[char] = true;
  }

  for(let char of s2){
      if(char in hashMap ){
          return 'YES';
      }
  }
  return 'NO';
}

s1 = 'dapkqnowwvdrknfvcmanjuroumppajrzklucroxvpfmcsclqa'
s2 = 'ivtnjtgiogmwhqybjaxlktqbwsdhqrwovoavetymkpcco'

console.log(twoStrings(s1, s2))
