var subsets = function(nums) {
    let res = [[]], appendarr = [];

    for(let num of nums) {
        appendarr = [];
        for(let entry of res) {
            appendarr.push([...entry, num])
        }
        res.push(...appendarr)
    }
    return res;
}

console.log(subsets([1,2,3]))

// 0 (Empty)             :         [] 
// 1 (Adding 1 to it)    :         [] [1] 
// 2 (Adding 2 to it)    :         [] [1] [2] [1,2]
// 3 (Adding 3 to it)    :         [] [1] [2] [1,2] [3] [1,3] [2,3] [1,2,3]

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Input: nums = [0]
// Output: [[],[0]]