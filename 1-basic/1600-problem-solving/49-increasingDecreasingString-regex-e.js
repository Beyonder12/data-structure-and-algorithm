/**
 * 
 * @param {string} s 
 * @returns {string}
 */

const sortString = function(s) {
    let temp = new Array(26).fill(0), ans = [];
    console.log('ab'.charCodeAt(1))
    for (let i = 0; i < s.length; i++) {
        temp[s.charCodeAt(i) - 97] += 1;
    }

    let flag = true;
    while(ans.length < s.length) {
        for (let i = 0; i < temp.length; i++) {
            var pos = i;
            if (!flag) {
                pos = 25 - i;
            }
            if (temp[pos] !== 0) {
                ans.push(String.fromCharCode(pos+97));
                temp[pos] -= 1;
            }
        }

        flag = !flag;
    }
    ans = ans.join('');

    return ans;
};
s = "aaaabbbbcccc"

console.log(sortString(s))

const sortString1 = s => {
    s = s.split``.sort().join``
    let result = ''
    while(s.length) {
        result += s.match(/([a-z])(?!\1)/gi).join``
        s = s.replace(/([a-z])(?!\1)/gi, '')
        result += (s.match(/([a-z])(?!\1)/gi) || []).reverse().join``
        s = s.replace(/([a-z])(?!\1)/gi, '')
    }
    return result;
}

console.log(sortString1(s))