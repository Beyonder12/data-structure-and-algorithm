// const { throws } = require("assert/strict");

class Node{
  constructor(val, next) {
    this.val = val ? val : null;
    this.next = next ? next: null;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
    this.size = 0
    this.arr = [];
    this.flow = "";
  }
  addTail = function(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.arr.push(newNode.val)
      this.flow += `${node.val} -> `
    }
    else {
      let cur = this.head;
      for(let i = 1; i < this.arr.length ; i++) {
        cur = cur.next;
      }
      this.arr.push(newNode.val);
      cur.next = newNode;
      if(!cur.next) this.flow += `${newNode.val} `
      this.flow += `${newNode.val} -> `
    }
    this.size++;
  }

  addHead = function(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.arr.unshift(newNode.val);
      this.flow = `${newNode.val} -> ` + this.flow;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.arr.unshift(newNode.val)
      this.flow = `${newNode.val} -> ` + this.flow;
    }
    this.size++;
  }



}

let ll = new LinkedList();
ll.addHead(400)
ll.addTail(100);
ll.addTail(200);
ll.addHead(300);

console.log(ll)
