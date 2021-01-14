  class Queue {
    constructor() {
      this.collection = {};
      this.start = ;
      this.end = 0;
    }
    print() {
      console.log(this.collection);
    }
    enqueue(val) {
      return this.collection[this.end++] = val;
    }
    dequeue() {
      return this.collection[this.start++];
    }
    front() {
      return this.collection[this.start];
    }
    size() {
      return this.end - this.start;
    }
    isEmpty() {
      return this.size() === 0;
    }
  }

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.dequeue();
q.print() 