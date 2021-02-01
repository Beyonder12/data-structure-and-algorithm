var myAtoi = function (s) {
    s = s.trim();
    if(!s) return 0;

    var sign = 1;
    var i = 0, answer = 0;
    if(s[i] == '+') {
        sign = 1;
        i++;
    }

    else if(s[i] == '-') {sign=-1;i++}

    for(;i<s.length;i++) {
        var temp=s.charCodeAt(i)-48;
    
        if(temp>9 || temp < 0)break;
        if(answer > 2147483647/10 || answer > (2147483647-temp)/10)return sign == 1 ? 2147483647 : -2147483648;
        else answer = answer * 10 + temp;
    }
    return answer* sign;
}

console.log(myAtoi("-12-3"))
console.log("1".charCodeAt())