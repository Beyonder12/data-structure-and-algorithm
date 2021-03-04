/**
 * @param {string} str
 * @return {string}
 */

 var toLowerCase = function(str) {
     let lowerCase = "";

     for (let letter of str) {
         const index = letter.charCodeAt(0);
         if (index >= 65 && index <= 90) {
             letter = String.fromCharCode(index + 32);
         }
         lowerCase += letter;
     }

     return lowerCase;
 };

 console.log(String.fromCharCode("A".charCodeAt(0)+32));
 console.log(String.fromCharCode(65))