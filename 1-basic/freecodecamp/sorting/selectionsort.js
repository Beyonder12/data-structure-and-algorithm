function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i
    for(let j = i +1; j < arr.length; j++) {
      if(arr[minIndex] > arr[j]) minIndex = j
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))


console.log('E'.charCodeAt(0))


/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
  let temp, res = [], n;

  for(e of cpdomains) {
      tempNumb = Number(e.split(' ')[0]);
      tempString = e.split(' ')[1].split('.');
      p = tempString;
      n = tempString.length;
      console.log('n', n)
      // tempString.shift()
      console.log('tempString', tempString, 'tempNumb', tempNumb)
      for(let i = 0; i < n; i++) {
          console.log(i, ": ", tempString)
          res.push(tempString)
          tempString.shift(0,1);


      }
      console.log('res: ', res)
      // res.push(0, ['a', 'b', 'c'])
      // res.push(2, ['a', 'b'])
      // console.log( tempNumb, tempString, res)
  }

};
// console.log(subdomainVisits(
  // ["9001 discuss.leetcode.com"]))

  // let a = [], b = ['a','b', 'c'];

  // for(let i = 0; i < 3; i++) {
  //   a.push(b);
  //   b = b.shift()
  // }
  // console.log(a)


  let a = [1,2,3,4,5]
  let  obj = {
    a: "hae",
    b: "hah",
  }

  for([k,v] in obj) console.log(k,obj[k])

console.log(a)

  console.log(obj)

