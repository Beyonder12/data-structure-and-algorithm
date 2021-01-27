/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function Node (val) {
    this.element = val;
    this.next = null;
}

function ListNode() {
    head = null;
    length = 0;

    this.head = () => {
        return head
    }

    this.add = function (val) {
        node = new Node(val);
        
        if (head === null) {
            head = node;
            
        } else {
            
            current = head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }

        length++;
    }

    this.deleteNode = function(node) {
        node.element = node.next.element;
        node.next = node.next.next;
        return head = node;
    
    }
    
    this.print = () => {
        current = head;
        while(length) {
            console.log(current.element);
            current = current.next;
            length--;
        }
        
        
    }
}


var ln = new ListNode();
ln.add(200);
ln.add(300);
ln.add(400);
ln.add(500);
// ln.deleteNode( { element: 200, next:  { element: 300, next: null } });
console.log(ln);
console.log(ln.head())
ln.print();