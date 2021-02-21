var intersect = function(num1, num2) {
    const map = new Map();
    for (const  n of num1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }

    const result = [];
    for (const n of num2) {
        if (map.has(n) && map.get(n) > 0) {
            result.push(n);
            map.set(n, map.get(n) - 1);
        }
    }
    return result;
};

console.log(intersect([1,2,3], [1,2]))