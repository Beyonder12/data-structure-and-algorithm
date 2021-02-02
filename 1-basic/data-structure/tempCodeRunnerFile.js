var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i+=2) {
        for(let j = 0; j < arr.length; j++) {
            arr1=[...arr]
            console.log(arr1)
            arr1.splice(j,i+1)
            // sum+=(arr.slice(j,i+1)).reduce((a,c)=>a+c);
        }
        // console.log(i+1)
    }
    return sum;
}

// sumOddLengthSubarrays([1,2,3,4,5])

a = [1,2,3,4,5]
console.log(a.slice(3,5))
console.log(a)