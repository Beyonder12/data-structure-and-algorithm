function minimumBuses(families, input) {
    if(input.length < families) return "Input must be equal with count of family";
    let ans = [];

    input.sort((a,b) => b - a);
    // console.log("this is input before: ", input)
    for(let i = 0; i < input.length; i++) {
        let j = input.length - 1, max = input[i];
        if(input[i] === 0) break;
        
        while(i < j) {
            // console.log("this inputi, inputj ", input[i], input[j])
            if(max >= 4) break;
            max = Math.max(max, input[i] + input[j])
            j--;
        }
        // console.log(max)
        ans.push(max)
         input[j] = 0
        if(max < 4)ans.push(max)

    }

    // console.log("this is input after: " ,input)
    ans;
    return ans;

}



families1 = 5
families2 = 8
families3 = 5
input1 = [1, 2, 4, 3, 3] // 4 3 3 2 1
input2 = [2, 3, 4, 4, 2, 1, 3, 1] //4 4 3 3 2 2 1 1
input3 = [1, 5]

console.log("this is the solution1 : " ,minimumBuses(families1, input1));
console.log("this is the solution2 : ", minimumBuses(families2, input2));
console.log("this is the solution3 : ", minimumBuses(families3, input3));