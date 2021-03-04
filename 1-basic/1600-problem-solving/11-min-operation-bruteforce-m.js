/**
 * @param {string} boxes
 * @return {number[]}
 */

 var minOperations = function(boxes) {
     let answer = [];

     for (let i = 0; i < boxes.length; i++) {
         answer[i] = 0;
         for(let j = 0; j < boxes.length; j++) {
             if(boxes[j] == 1) answer[i] += Math.abs(j-i);
         }
     };
     return answer;
 };

 console.log(minOperations("110"));
 console.log(minOperations("001011"));