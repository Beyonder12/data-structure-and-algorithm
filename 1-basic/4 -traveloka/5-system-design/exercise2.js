function Node(val) {
  this.val = val;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

LinkedList.prototype.get = function(index) {
  if(this.size === 0 || index < 0 || index > this.size) return -1;
  let cur = this.head;

  for(let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val;
}

LinkedList.prototype.addAtHead = function(val) {
  const newNode = new Node(val);

  if(!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size++;
  return this;

}

LinkedList.prototype.addAtTail = function(val) {
  const newNode = new Node(val);

  if(!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
  return this;
}

LinkedList.prototype.addAtIndex = function(index, val) {
  const newNode = new Node(val);

  if(index > this.size) return;
  if(index <= 0) {
    return this.addAtHead;
  }
  if(index === size) {
    return this.addAtTail;
  }
  let cur = this.head;
  for(let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }
  newNode.next = cur.next ? cur.next : null;
  cur.next = newNode;
  this.size++;
  return this;
}

LinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size ||index < 0) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return this;
  }
  let cur = this.head;
  for (let i = 0; i< index - 1; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next ? cur.next.next : null;
  if(!cur.next) {
    this.tail = cur
  }
  this.size--;
  return this;
}
