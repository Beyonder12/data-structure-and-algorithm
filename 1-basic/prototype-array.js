function between(from,to,inclusive=true){
if(inclusive){
return this.filter((x,i)=>{
if(i>=(from-1) && i<=(to-1)){return true}
})
}
if(!inclusive){
return this.filter((x,i)=>{
if(i>(from-1) && i<(to-1)){return true}
})
}}

Array.prototype.between=between;
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
console.log(arr.between(5,10,false)); //returns  [60, 70, 80, 90]
console.log(arr.between(5,9));        //returns  [50, 60, 70, 80, 90]
