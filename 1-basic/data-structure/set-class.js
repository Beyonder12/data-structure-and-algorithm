function Set() {
    // the var collection will hold our set
    var collection = [];
    // function to check the existence of element
    this.has = function(element) {
        return collection.indexOf(element) !== -1;
    };
    this.add = function(val) {
        return this.has(val) ? false : Boolean(collection.push(el));
    };
    this.remove = function(val) {
        return this.has(val) ? Boolean(collection.splice(collection.indexOf(val), 1)) : false;
    }
    this.size = function() {
        return collection.length;
    }
    // this will return all the values
    this.display = function() {
        return collection;
    };
}