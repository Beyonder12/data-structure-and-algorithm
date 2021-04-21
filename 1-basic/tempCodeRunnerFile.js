var maximum69Number  = function(num) {
  let str = String(num).split(''), i = 0;
      
  while(i < str.length) {
      if(str[i] == 6) {str.splice(i, 1, '9'); break;}
      i++;
  }
  
  return Number(str.join(''));
  
};

num = 9669;

console.log(maximum69Number(num))

const maximum69Number = num => {
  if (num / 1000 << 0 === 6) return num + 3000;
  if ((num / 100 << 0) % 10 === 6) return num + 300;
  if (num % 100 / 10 << 0 === 6) return num + 30;
  if (num % 10 === 6) return num + 3;
  return num;
};