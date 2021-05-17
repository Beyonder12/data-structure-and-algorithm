function Node(val) {
  this.val = val;
  this.next = null;
};

function MyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;


  this.get = function(index) {
    if(this.size === 0 || index > this.size - 1 || index < 0) return -1;
    let cur = this.head, a = [cur.val];

    for(let i = 0; i < index; i++) {
      cur = cur.next;
      a.push(cur.val)
    }
    // return a;
    return cur.val;
  }

  this.addAtHead = function(val) {
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

  this.addAtTail = function(val) {
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

  this.addAtIndex = function(index, val) {
    const newNode = new Node(val);
    if (index > this.size) return;
    if (index <= 0) {
      return this.addAtHead(val);
    }
    if (index === this.size) {
      return this.addAtTail(val);
    }

    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    newNode.next = cur.next ? cur.next : null;
    cur.next = newNode;
    this.size++;
    return this;
};

  this.deleteAtIndex = function(index) {
    if (index >= this.size || index < 0) return;
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return this;
    }
    let cur = this.head;
    for(let i = 0; i < index - 1; i++) {
      cur = cur.next;
    }
    cur.next = cur.next.next ? cur.next.next : null;
    if(!cur.next){
      this.tail = cur;
    }
    this.size--;
    return this;
  }


}

const mls = new MyLinkedList();
console.log('add 100: ', mls.addAtHead(100))
console.log('add 200: ',mls.addAtHead(200))
console.log('add 300: ',mls.addAtHead(300))
console.log('tail 400: ',mls.addAtTail(400))
console.log('tail 500: ',mls.addAtTail(500))
console.log('show head.next.next: ',mls.head.next.next)
console.log('show get in size: ',mls.get(mls.size - 1))
console.log('show mls: ',mls);
