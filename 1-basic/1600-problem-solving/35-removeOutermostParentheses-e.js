

let removeOuterParentheses = function(S) {

    let newStr = "", stack = [], primals = new Set();
    // We want loop through the string 
    // For each char we push it onto the stack
    // Mark the indices where the primitive composition starts and ends

    stack.push(S[0]);
    let start = 0;
    for (let i = 1; i < S.length; i++) {
        if(S[i] === "(") {
            stack.push("(")
        } else {
            stack.pop()
        }

        if (stack.length === 0) {
            primals.add(start)
            primals.add(i)
            start = i + 1
        }
    }

    for (let i = 0; i < S.length; i++) {
        if(primals.has(i)) {
            continue;
        } else {
            newStr += S[i];
        }
    }
    return newStr;
}

S = "   (()())(())"

console.log(removeOuterParentheses(S));

let p = new Set();
p.add(0);
p.add(1);
console.log(p)

for(let i = 0; i < 10; i++) {
    if(i===5) continue;
    console.log(i);
}