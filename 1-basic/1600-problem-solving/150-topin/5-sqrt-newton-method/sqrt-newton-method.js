/**
 * @param {number} x
 * @return {number}
 */

let sqrt = function(a) {
    if(!a) return 0;
    const eq = (e) => e**2 - a;
    let xi = a;
    let yi = eq(xi);
    while(yi > 0.1) {
        xi = xi-yi / (2*xi);
        yi = eq(xi);
    }
    return xi; 
}

console.log(sqrt(4))
