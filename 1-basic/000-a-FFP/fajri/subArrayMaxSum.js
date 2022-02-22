// Input: [2, 1, 5, 1, 3, 2], k=3 Output: 9
// Input: [2, 3, 4, 1, 5], k=2 Output: 7

// function subMax(arr, k) {
//     let max = Number.MIN_SAFE_INTEGER;
//     for(let i = 0; i < arr.length - k + 1; i++) {
//         let sum = 0;
//         for(let j = i; j < k + i; j++) {
//             sum += arr[j];
//         }
        
//         max = Math.max(max, sum);

//     }
//     return max;
// }

console.log(subMax([2, 1, 5, 1, 3, 2], k=3));

function subMax(arr, k) {
    let max = Number.MIN_SAFE_INTEGER, sum=0, temp = k, start = 0;
    for(let i = 0; i < arr.length; i++) {

        sum += arr[i];
        // console.log(sum)
        max = Math.max(max, sum);
        temp--;
        if(temp == 0) {
            sum = 0;
            temp = k;
            start++;
            i=start;
        }

    }
    return max;
}