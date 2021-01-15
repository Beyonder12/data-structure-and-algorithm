function Set() {
    var collection = [];

    this.has = function(val) {
        return (collection.indexOf(val) !== -1);
    };

    this.display = function() {
        return collection;
    }

    this.add = function(val) {
        if(!this.has(val)){
            collection.push(val);
            return true;
        }
        return false;
    };

    this.remove = function(val) {
        if(this.has(val)){
            var index = collection.indexOf(val);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    this.size = function() {
        return collection.length;
    };

    this.union = function(anotherSet){
        const newSet = new Set();
        const addToSet = e => newSet.add(e);
        this.display.array.forEach(addToSet);
        return newSet;
    }
}