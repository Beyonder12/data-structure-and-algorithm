function reverse(param) {
  let i = 0, j = param.length - 1;
   param=param.split('');
  while(i < j) {
    let temp = param[i];
    param[i] = param[j];
    param[j] = temp;
    i++;
    j--;
  }
  return param.join('')
}

input = 'bakar';
input2 = 'bakar';
input = input.split('').reverse().join('');

console.log(input)
console.log(reverse(input2))
