class CircularQueue {
    constructor(size) {
        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size - 1;

        while (size > 0) {
            this.queue.push(null);
            size--;
        }
    }

    print() {
        console.log(this.queue);
    }

    enqueue(item) {
        if (this.queue[this.write] === null) {
            this.queue[this.write++] = item;

            if (this.write > this.max) this.write = 0;
            return item;
        }
        return null;
    }

    dequeue() {
        if (this.queue[this.read] != null) {
            let item = this.queue[this.read];
            this.queue[this.read++] = null;
            if (this.read > this.max) this.read = 0;
            return item;
        }
        return null;
    }
}

var cq = new CircularQueue(5);
cq.print();
(cq.enqueue(5));
cq.print();
(cq.enqueue(4));
cq.print();
(cq.enqueue(3));
cq.print();
(cq.enqueue(2));
cq.print();
(cq.enqueue(1));
cq.print();
(cq.dequeue());
cq.print();
(cq.dequeue());
cq.print();
(cq.dequeue());
cq.print();
(cq.enqueue(10));
cq.print();
console.log(cq.dequeue());
cq.print();
