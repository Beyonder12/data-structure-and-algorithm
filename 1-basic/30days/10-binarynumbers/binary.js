'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    var n = parseInt(readLine());
    var bin = "";
    var currentValue;
    var max = 0;
    var count = 0;
    
    while (n > 0) {
        currentValue = (n / 2) % 1 === 0 ? "0" : "1";
        if(currentValue === "1") {
            count++;
        } else {
            count = 0;
        }
        
        if (count > max)  {
            max = count;
        }
        
        bin = currentValue + bin;
        n = Math.floor(n/2);
    }
    
    console.log(max);
}