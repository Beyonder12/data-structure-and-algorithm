function generateParenthesis(n) {
    const res = [];

    function go(l, r, s) { // l : left remaining, r: right remaining
        if (l > r) return; // The number of '(' should be always >= ')'

        if (l === 0 && r === 0) {
            res.push(s);
            return;
        }

        if (l > 0) go(l - 1, r, s + '(');
        if (r > 0) go(l, r - 1, s + ')');
    }

    go(n, n, '');
    return res;
}

console.log(generateParenthesis(3));
// This problem uses the backtracking concept
// input : 3
// output: [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
// explanation : combination of the parethesis formed