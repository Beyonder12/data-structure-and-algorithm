/*
var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};

var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;

    this.add = function(element) {
        if(!this.head && !this.tail) {
            let node = new Node(element, null);
            this.head = node;
            this.tail = node;
            return;
        } else {
            let node = new Node(element, this.tail);
            this.tail.next = node;
            this.tail = node;
        }
    }

    this.remove = function(element) {
        if(!this.head) return null;
        // remove head
        if(element == this.head.data) {
            this.head = this.head.next;
            this.head.prev = null;
            return;
        }
        //remove tail
        if(element == this.tail.data) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            return;
        }

        // remove other
        let current = this.head;
        let delItemPrev = null;
        let delItemNext = null;

        //loop once to get the right pointers
        while(current) {
            if(current.data == element) {
                delItemPrev = current.prev;
                delItemNext = current.next;
            }
            current = current.next;
        }
        // loop to update values
        current = this.head;
        while(current) {
            if(current.data == delItemPrev.data) {
                current.next = delItemNext;
            }
            if(current.data =delItemNext) {
                current.prev = delItemPrev;
            }
            current = current.next;
        }

    }

}

var dll = new DoublyLinkedList();
dll.add(100);
dll.add(200);
// dll.add(300);
// dll.add(400);

console.log(dll );
*/

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++;
        return this;

    }
};

// let list = new DoublyLinkedList;
// console.log(list);
// list.push(10);
// console.log(list)
// list.push(20);
// console.log(list)
// list.push(30);
// console.log(list)
let node = new Node(30);
console.log(node)
node.prev = new Node(40);
console.log(node)
