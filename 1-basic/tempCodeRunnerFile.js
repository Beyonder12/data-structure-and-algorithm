function makeAnagram(a, b) {
    let map = {}, count = 0, tot = a.length + b.length;

    for(let char of a) {
        map[char] = (map[char] || 0) + 1;
    }

    for(let char of b) {
        map[char] = (map[char] || 0) - 1;
    }
    console.log(map)
    for (let key in map) {
        count +=Math.abs(map[key])
    }
    return count;

}
a = 'cde'
b = 'abc'
console.log(makeAnagram(a, b))
