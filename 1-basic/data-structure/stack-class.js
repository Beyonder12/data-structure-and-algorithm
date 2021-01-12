class Stack {
    constructor() {
        this.collection = [];
    }
    print() {
        console.log(this.collection);
    }
    push(val) {
        return this.collection.push(val);
    }
    pop() {
        return this.collection.pop();
    }
    peek() {
        return this.collection[this.collection.length - 1];
    }
    isEmpty() {
        return this.collection.length === 0;
    }
    clear() {
        return (this.collection.length = 0);
    }
}

var stack = new Stack();
stack.push(4);
stack.push(5);
stack.print();