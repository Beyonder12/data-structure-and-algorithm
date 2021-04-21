/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    let ans = []
    for(img of image) {
        ans.push(img.reverse().map( e => e = 1^e))
    }
    
    return ans;
};

var flipAndInvertImage = function(A) {
    return A.map(a=>{return a.reverse().map(b=>b^1)})
};

var flipAndInvertImage = function(A) {
    var reverseArr = function(arr, start, end){
         if(start < end){
            const temp = arr[start];
            arr[start] = arr[end]
            arr[end] = temp;
             reverseArr(arr, start + 1, end - 1)
        }
    }
    
    for(let i = 0; i < A.length; i++){
        const row = A[i];
        reverseArr(row, 0, row.length - 1)
        for(let j = 0; j < row.length; j++){
                if(row[j] === 0){
                    row[j] = 1
                } else {
                    row[j] = 0
                }
        }
    }
    
    return A
};