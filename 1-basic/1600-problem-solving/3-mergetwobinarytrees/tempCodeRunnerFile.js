function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    this.push = function(val) {
      return collection.push(val);
    };
    this.pop = function() {
      return collection.pop();
    };
    this.peek = function() {
      return collection[collection.length - 1];
    };
    this.isEmpty = function() {
      return collection.length === 0;
    };
    this.clear = function() {
      collection.length = 0;
    };
  }
  
  var stack = new Stack();
  stack.push(4);
  stack.push(5);
  console.log(stack.clear());