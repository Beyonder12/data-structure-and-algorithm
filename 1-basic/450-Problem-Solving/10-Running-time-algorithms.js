// running time O(n^2) or its called as time complexity

function runningTime(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (let j = i - 1; j >=0; j--) {
            if (temp < arr[j]) {
                count++;
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return count;
}