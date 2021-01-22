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

    this.add = function(element){
        var node = new Node(element);
        if(hed === null){
            head = node;
        } else {
            var currentNode = head;

            while(currentNode.next){
                currentNode = current.next;
            }
            currentNode.next = node;
        }

        length++;
    };

    this.remove = function(element){
        var currentNode = head;
        var previousNode;
        if(currentNode.element === element) {
            head = currentNode.next;
        } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length --;
    };

    this.isEmpty = function() {
        return this.size() > 0 ? false : true;
    };

    this.indexOf = function(el) {
        let currentNode = head, index = -1, indexFound = false;

        while (!indexFound && currentNode) {
            index++;
            if(currentNode.element === el) {
                indexFound = true;
            }
            currentNode = currentNode.next;
        }

        return indexFound ? index : -1;
    };

    this.elementAt = function(i) {
        let currentNode = head, currentElement, index = -1, indexReached = false;

        while (!indexReached && currentNode) {
            index++;
            currentElement = currentNode.element;
            if(index === i) {
                indexReached = true;
            }
            currentNode = currentNode.next;
        }
        return indexReached ? currentElement : undefined;
    }
}
