// // Complete the findMedian function below.
// function findMedian(arr) {
//     var a = arr.sort(), l=a.length, c;
//     if ( l % 2 != 0) { c = a[(l+1)/2 - 1] }
//     else {c = ( a[(l/2) - 1] + a[l/2 ] ) /2 }
//     return c;
// }

function findMedian(arr, n) {
    arr.sort((a, b) => a - b);
    return arr[(n - 1)/2];
}
console.log(findMedian([1,2,3,4,5,6]));
