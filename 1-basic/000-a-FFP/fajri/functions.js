function factorial(x) {
    if(x < 1) return 1;
    return x*factorial(x-1)
}

function fibonacci(x) {
    if(x < 2) return 1;
    return fibonacci(x-2) + fibonacci(x-1);
}


function printFirstFibonacci(num) {
    let a = 0, b = 1, res = [0, 1];
    for(let i = 2; i < num; i++) {
        c = a + b;
        res.push(c)
        a = b
        b = c

    }
    return res;
}

function pow(x, y) {
    flag = y < 0 ?  -1 : 1;
    y = Math.abs(y)
    let res = x
    for(let i = 0; i < y - 1; i++) {
        res = res * x
    }
    return flag == -1 ? 1 + "/" + res : res + "";
}

function firstPrimeNumber(nTh) {
    let i = 1, n = 0, res = [];//1 2 3 4 5 6
    while(n < 5) {
        j=1
        countDivisible = 0
        while(j <= i) {
            if(i % j == 0) countDivisible++
            j++
        }
        if(countDivisible == 2) {
            res.push(i)
            n++
        }
        i++;
    }
    return res;
}


function deleteSomeAnagram(arr) {
    let res = new Map()
    for(e of arr) {
        let sum = 0;
        for(c of e) {
            sum += (c.charCodeAt())
        }
        if(!res.has(sum)) res.set(sum, e)
    }

    return Array.from(res.values());
}

function minSteps(s, t) {
    sMap = {}, tMap = {}, steps = 0, isDone = false;
    for(e of s) sMap[e] = (sMap[e] + 1) || 1;
    for(e of t) tMap[e] = (tMap[e] + 1) || 1;

    for(k in sMap) {
        if(!tMap.hasOwnProperty(k)) {
            steps += sMap[k]
        } else {
            steps += Math.abs(sMap[k] - tMap[k])
            isDone = true;
        }
    }
    for(k in tMap) {
        if(!sMap.hasOwnProperty(k)) {
            steps += tMap[k]
        } else {
            if(!isDone) steps += Math.abs(sMap[k] - tMap[k]);
        }
    }
    console.log("sMap", sMap);
    console.log();
    console.log("tMap", tMap);
    return steps;  
}

function minSteps1(s, t) {
    let ans = 0, sCounter = [], tCounter = [];
    for(ch of s) sCounter[ch.charCodeAt() - 97] ? sCounter[ch.charCodeAt() - 97]++ : sCounter[ch.charCodeAt() - 97] = 1;
    for(ch of t) tCounter[ch.charCodeAt() - 97] ? tCounter[ch.charCodeAt() - 97]++ : tCounter[ch.charCodeAt() - 97] = 1;
    for(let i = 0; i< 26; i++) ans += Math.abs(sCounter[i] - tCounter[i])
    // console.log(sCounter);
    // console.log(tCounter);
    return ans;
}

function minSteps2(s, t) {
    let ans = 0, sCounter = new Array(26).fill(0), tCounter = new Array(26).fill(0);
    console.log();
    for(ch of s)sCounter[ch.charCodeAt() - 97]++;
    for(ch of t)tCounter[ch.charCodeAt() - 97]++;
    for(let i = 0; i< 26; i++) ans += Math.abs(sCounter[i] - tCounter[i])
    // console.log(sCounter);
    // console.log(tCounter);
    return ans;
}

// public int minSteps(String s, String t) {
//     int ans = 0;
//     int[] sCounter = new int[26], tCounter = new int[26];
//     for(char ch: s.toCharArray()) sCounter[ch - 'a']++;
//     for(char ch: t.toCharArray()) tCounter[ch - 'a']++;
//     for (int i = 0; i < 26; i++) ans += Math.abs(sCounter[i] - tCounter[i]);
//     return ans;
// }

console.log(printFirstFibonacci(10));
console.log(factorial(5))
console.log(pow(2,3));
console.log(pow(2,-3));
console.log(firstPrimeNumber(3));
console.log(deleteSomeAnagram(["code", "argmm", "odce", "mmarg"]))
console.log(minSteps("leetcode", "coatts"));
console.log(minSteps1("leetcode", "coatts"));
console.log(minSteps2("leetcode", "coatts"));