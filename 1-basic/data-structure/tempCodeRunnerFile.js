 function powerFunc (x, y) {
    if (y === 0)return 1;

    let pow = Math.abs(y);
    

    let ans = (pow%2) ? powerFunc(x*x, (pow-1)/2) * x : powerFunc(x*x, pow/2);

    return (y>0)?ans : 1/ans;

};

console.log(powerFunc(2,-10));

// let i=10;
// while(i--) {
//     console.log(powerFunc(2,i));

// }

// console.log(1/2)
let p = Math.abs(-10)
console.log(p)