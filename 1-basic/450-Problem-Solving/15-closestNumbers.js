function closestNumbers(arr) {
    if (arr.length <= 1) return;

    arr = arr.sort((a,b) => a - b);
    const differences = new Map();

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let nextValue = arr[i+1];
        if (nextValue === undefined || nextValue === null) break;

        let difference = Math.abs(arr[i] - arr[i +1]);

        if (!differences.has(difference)) {
            differences.set(difference, [arr[i], arr[i + 1]]);
        }
        else {
            differences.set(difference,  differences.get(difference).concat([arr[i], arr[i +1]]));
        }
    }

    let lowest = Math.min(...differences.keys())
    return differences.get(lowest);
}

const differences = new Map()
differences.set (1, [2,3]).set (2, [2,4]).set (1, [2,3])

console.log( Math.min(...differences.keys()))