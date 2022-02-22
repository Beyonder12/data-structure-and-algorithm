
function parseInt(str) {
    let ord = order(str.length), res = 0;
    
    for(s of str) {
        let number = s.charCodeAt() - 48;
        res += number * ord;
        ord /=10
    }
    return res;
}

function order(length) {
    let acc = 1;
    for(let i = 1; i < length; i++) {
        acc *= 10;
    }
    return acc;
}

console.log(parseInt("1234"))
console.log("1".charCodeAt() - 48)

// console.log("2".charCodeAt()- 48)
// "1111"
// "1234"