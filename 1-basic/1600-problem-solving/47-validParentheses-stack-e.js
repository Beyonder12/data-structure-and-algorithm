

const isValid = function(s) {
    let stack = [];

    complement = {
        '}' : '{',
        ']' : '[',
        ')' : '(',
    }

    for (char of s) {
        if (!complement[char] ) stack.push(char);
        else if (stack.pop() !== complement[char]) return false;
    }

    return stack.length === 0;
}