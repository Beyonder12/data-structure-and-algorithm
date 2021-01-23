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
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        length++;
    };

    this.addAt = function(index, element) {
        let node = new Node(elemtent);

        // check for negative values and values beyond current length of LinkedList
        if (index < 0 || index > length) {
            return false;
        }

        // inserting to end of list reuses functionality
        if (index === length) {
            this.add(element);
        } else {
            let count = 0;
            let previousNode = head;

            // insert at head of the list shift the reference of the head and the new node
            if(index === count) {
                head = node;
                node.next = previousNode;
                length++;
                return true;
            }

            while(previousNode) {
                let currentNode = previousNode;
                count++;

                // inserting at value in between nodes shifts reference of the previousNode and the new nodes next to the currentNode
                if (currentNode) {
                    if (count === index) {
                        previousNode.next = node;
                        node.next = currentNode;
                        length++;
                        return true;
                    }
                }
                previousNode = currentNode;
            }
        }
    }
}