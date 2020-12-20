
var a = "-12".split("").filter(e => Number.isInteger(parseInt(e)) ).join('')
console.log( a );
result=[];



for (let i =0; i < a.length; i+=3) {
    result.push(a.substr(i, 3))
}

console.log(result)
if (a.length%3 ==0 || a.length%3 ==2) {

    console.log(result.join('-'));

} else if (a.length%3 ==1) {  
    b = result.slice(-2).join("")
    c = [b.substr(0,2), b.substr(2,2)]
    console.log(result.slice(0,-2).concat(c).join("-") );
}