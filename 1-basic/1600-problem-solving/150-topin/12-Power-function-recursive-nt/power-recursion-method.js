myPow = (x,y) => {
    if (y === 0 ) return 1;

    let pow = Math.abs(y);

    let result = pow%2 === 0? myPow(x*x, pow/2) : myPow(x*x, (pow-1)/2) * x;

    return y < 0 ? 1/result : result;
}
console.log("gag")
console.log(myPow(2,0.5))