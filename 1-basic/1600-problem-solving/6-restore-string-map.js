/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

 var restoreString = function(s, indices) {
     obj = {}, str = "";

     for (let i = 0; i < s.length; i++) {
         obj[indices[i]] = s[i];
     };

     for (key in obj) {
         str += obj[key];
     };
     
     return str;
 };

 console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]))