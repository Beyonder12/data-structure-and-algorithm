var sumZero = function(n) {
    let arr =  Array(n).fill(0), sum = 0;
    for(let i = 0; i < n -1; i++) {
      arr[i] = Math.floor(Math.random()<0.5 ? Math.random()*-100 :Math.random()*100 )
      sum += arr[i];
    }
    arr[n-1] = sum*-1;
  
    // sum2 = arr.reduce((c,v)=> c+v);
    // console.log(sum2)
    // console.log(sum)
    return arr;
    
  };
  
  n = 5
  console.log(sumZero(n));