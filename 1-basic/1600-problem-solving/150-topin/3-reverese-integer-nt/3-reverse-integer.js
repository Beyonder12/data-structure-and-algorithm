const reverse = x => {
    const negative = x < 0 ? -1 : 1;
    let out = 0;
    x = Math.abs(x);
    while (x > 0) {
        const remainder = x % 10;
        out = out * 10 + remainder;
        x = Math.floor(x/10);
    }
    if (out > Math.pow(2,31)) return 0;
    return out * negative;
};
console.log(reverse(123))