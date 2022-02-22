function minDiff(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length - 1; i++){
        sum += Math.abs(arr[i] - arr[i+1]);
    }
    return sum;
}

console.log(minDiff([1,3,3,2,4]))