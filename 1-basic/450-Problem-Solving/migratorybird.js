
// function migratoryBirds(arr) {
//
//   let spotted = new Array(5).fill(0);
//
//   for (let bird of arr) ++spotted[bird-1];
//
//   return spotted.indexOf(Math.max(...spotted)) +1;
// }
//
// let spotted = new Array(5).fill(0)
// console.log(spotted)
// console.log(spotted[0]++)
// console.log(spotted)



let spotted = new Array(5).fill(0);
console.log(spotted);

let arr = [5,2,3,3,3,5,5,1,4];
// for(let bird of arr) console.log(bird);
// console.log('bird printed')
for(let bird of arr) console.log(++spotted[bird-1]);
console.log(spotted)
console.log(spotted.indexOf(Math.max(...spotted)))
// console.log('stop')
// console.log(spotted.indexOf(Math.max(...spotted)) + 1)
