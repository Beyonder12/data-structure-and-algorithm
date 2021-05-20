a=[1,2,3,4,5]
a.reverse()
//provide ES6: class, function, method
console.log(a)


function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse('abcde'))
