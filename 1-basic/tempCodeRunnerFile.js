// function tes() {
//   console.log(true)
//   return true;
// }

// if(tes()) console.log(tes())

// console.log(tes())
// if(tes()) {console.log('jalan')};
// console.log(tes())


var a, b, c, d, e;
a = 2
if ( a == 1) a = a + 1;
if ( a == 2) a = a + 2;
if ( a == 3) a = a + 3;
if ( a == 4) a = a + 4;
if ( a == 5) a = a + 5;
console.log(a);

b = 2;
switch(b) {
  case 1: 
    b = b + 1;
    break;
  case 2:
    b = b + 2;
    break;
  case 3: 
    b = b + 3;
    break;
  case 4:
    b = b + 4;
    break;
}
console.log(b)

d = 20;
for (let e = 1; e < 4; e++) {
  d = d - e
}
console.log(d)

a = 1;
e = 1;
while(a < 8) {
  a = a + 1;
  if (a < 4) {
    e = e + a;
  } else {
    e = e + 2;
  }
}
console.log(e)