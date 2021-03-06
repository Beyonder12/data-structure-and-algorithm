var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line

  this.add = function(key, val) {
    var theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
      this.collection[theHash] = {};
    }
    this.collection[theHash][key] = val;
  }

  this.remove = function(key) {
    var hashedObj = this.collection[hash(key)];
    
    if (!Object.keys(hashedObj).length) {
      delete this.collection[hash(key)];
    }
  }

  this.lookup = function(key) {
    var theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null
  }
  // change code above this line
};
var h = new HashTable();
console.log(h.add('a', 1));
console.log(h.add('b', 2));
console.log(h.lookup('a'));
console.log(h.add('acbb', 3));
console.log(h.add('a', 3));
console.log(h.collection);
console.log(h.remove('a', 3));
console.log(h.collection);
