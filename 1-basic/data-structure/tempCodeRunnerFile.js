function Node (val, next = null) {
  this.element = val;
  this.next = next;
}

let node = new Node(100,200);

console.log(node)