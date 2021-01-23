function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function(element) {
        this.element = element;
        this.next = null;
    };

    this.size = function() {
        return length;
    };

    this.head = function() {
        return head;
    };

    this.add = function(element) {
        var node = new Node(element);
        if(head === null) {
            head = node;
        } else {
            var currentNode = head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        length++;
    };

    this.removeAt = function(index) {
        if (index >= length || index < 0) {return null}
        let currentNode = head;
        if (index == 0) {
            head = null;
            length--;
            return currentNode.element;
        }
        let previousNode;
        var c = 0;
        while (c !== index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            c++;
        }
        previousNode.next = currentNode.next;
        length--;
        return currentNode.element;//return removed element
    }
}