function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function (newitem) {
        if (this.isEmpty()) {
            return this.collection.push(newitem);
        }

        this.collection = this.collection.reverse()
        var found_index = this.collection.findIndex(function(item) {
            return newitem[1] >= item[1];
        });
        if (found_index === -1) {
            this.collection.push(newitem);
        } else {
            this.collection.splice(found_index, 0, newitem);
        }
        this.collection = this.collection.reverse();
    };
    this.dequeue = function () {
        if (!this.isEmpty()) {
            return this.collection.shift()[0];
        } else {
            return "The queue is empty.";
        }
    };
    this.size = function () {
        return this.collection.length;
    };
    this.front = function () {
        return this.collection[0][0];
    }
    this.isEmpty = function() {
        return this.size() > 0 ? false : true;
    };
}

pq = new PriorityQueue();
pq.printCollection();
pq.enqueue('fajri', 3);
pq.enqueue('fadli', 2);
pq.enqueue('fahmi', 1);
pq.printCollection();


console.log(pq.isEmpty())