class Node {
    constructor(val, next) {
        this.val = val ? val : null;
        this.next = next ? next : null;
    }
}

function removeElement(node, target) {
    if(!node) return null;
    let curr = new Node();
    console.log("curr1",curr)
    curr.next = node;
    console.log("curr2 --->",curr)
    node = curr;
    console.log("node ---> " ,node);
    while(curr.next) {
        if(curr.next.val === target) {
            curr.next = curr.next.next
        } else {
            curr = curr.next;
        }
    }
    return node.next;
}

const linkedList = new Node(1);
linkedList.next = new Node(2);
linkedList.next.next = new Node(6);
linkedList.next.next.next = new Node(3);
linkedList.next.next.next.next = new Node(6);

console.log(linkedList);

console.log(removeElement(linkedList, 6));

class Human{
    //properties/attribute
    constructor(eye) {
        this.eye=eye
    }
    //method/behaviour
    walk() {
        this.eye--;
    }
}

console.log(NaN != null)