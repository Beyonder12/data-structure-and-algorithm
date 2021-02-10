1
11
21
1211


function countAccumulateIt(n) {

  let str = "1";

  for (let i  = 0; i < n; i ++) {
    let count = 1, newStr=str;
    for (let j = 0; j < newStr.length; j++) {
      if(newStr[j] === newStr[j+1]) count++;
      else newStr = str[j] + count;
    }
    
  }

  return str;
}

console.log(countAccumulateIt(4))
console.log("hello")