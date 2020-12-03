function bigSorting(unsorted) {
    var sorted = unsorted.sort((a,b) => {
        if(a.length == b.length){
            return a > b ? 1 : -1;
        }
        return a.length - b.length;
    });

    return sorted
}




console.log(bigSorting([1,2,3,0]))

let a = '0997', b='1098';
console.log(a<b);
function test() {
    if(true){return true?-1:1;}
    return 2;
}

console.log(test())
console.log([2,3,5,1].sort())



/*
8
1
2
100
12303479849857341718340192371
3084193741082937
3084193741082938
111
200

*/