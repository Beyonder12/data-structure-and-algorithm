var permute = function(nums) {
    const result = [];

    function permute(arr, options){
        if(!options.length) result.push(arr);

        for(let i = 0; i < options.length; i++) {
            permute([...arr, options[i]], [...options.slice(0,i), ...options.slice(i+1)]);

        }
    }
    permute([], nums);
    return result;
}

// console.log(permute([1,2,3]))
let opsi = 1;
console.log(!opsi.length)

function a (b) {
    console.log(b.length);
    return 0;
}

a()