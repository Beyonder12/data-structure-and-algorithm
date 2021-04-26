/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let a = [], arr1 = arr;
  
    for(let i = 0; i < arr.length; i++) {
        arr1.splice(i, 1, 0)
        a.push(Math.max(...arr1))
      
    }
    a[arr.length - 1] = -1;
    return a;
  };
  
  const replaceElements = arr => {
    const result = new Array(arr.length);
    result[arr.length - 1] = -1;
    
    for (let i = arr.length - 1; i > 0; i -= 1) {
        result[i - 1] = Math.max(arr[i], result[i]);
    }
    
    return result;
  };
  
  function replaceElements(arr) {
    let max = -1;
    
    for (let i = arr.length - 1; i >= 0; i--) {
      const curr = arr[i];
      arr[i] = max;
      max = Math.max(max, curr);
    }
    
    return arr;
  }
  
  res = [18, 6,  6, 6, 1, -1]
  arr = [17, 18, 5, 4, 6,  1]
  
  // console.log(arr.push(-1))
  
  console.log(replaceElements(arr))
  // console.log(arr.push(-1))
  // console.log(arr)