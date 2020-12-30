function largestPrimeFactor(number) {
    let i=1, lN=[];
    while(i<number) {
        if(number%i==0);
        lN.push(i)
        i++;
    }
    return lN;
  }
  
  console.log(largestPrimeFactor(10));
  