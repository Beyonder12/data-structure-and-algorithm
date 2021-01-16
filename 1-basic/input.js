function checkSet(){
    var set = new Set([1,2,3,4,5]);
    set.delete(2);
    set.delete(5);
    return set;
    // return Array.from(set);
 }
 
 console.log(checkSet());