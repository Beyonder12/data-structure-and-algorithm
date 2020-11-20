// in mathematics, its called as disjunctive union 

console.log((function sym(args) {
  let a = Array.from(args);
         function removeDup(arr){
           arr.map((elem,index) => {
             if(arr.slice(index+1).includes(elem)){
               arr.splice(index,1);
             }
             })
             return arr;
         }

         args.reduce(function(arr1,arr2){
           removeDup(arr1);
           removeDup(arr2);

           let tempArr = [];

           arr1.map((elem,index) => {
             if(!arr2.includes(elem)){
               tempArr.push(elem);
             }
           });

           arr2.map((elem,index) => {
             if(!arr1.includes(elem)){
               tempArr.push(elem);
             }
           });

           arr1 = tempArr;

           return args = arr1.sort(function(a, b){return a - b});
         })

         return args
       }
)([[1,2,3], [2,3,4]]))

var a =  ([1,2,3],[2,3,1]);
var b = Array.from(a)
console.log(...b)
// console.log(...a);
// console.log(([1,2,3], [2,4,5]).reduce(function(arr1, arr2) {return [arr1, arr2]})
