
function power(x=3,y) {

  if(y === 0) return 1;

  pow = Math.abs(y);

  let result =  (pow % 2 === 0) ? power(x*x, pow/2) : x*power(x*x, (pow-1)/2);

  return (y>0) ? result : 1 / result;

 
}

console.log(power(2))