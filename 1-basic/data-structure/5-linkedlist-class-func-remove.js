function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function(element) {
        this.element = element;
        this.next = null;
    };

    this.size = function(){
        return length;
    };

    this.head = function(){
        return head;
    };

    this.add = function(element) {
        var node = new Node(element);
        if(head == null){
            head = node;
        } else {
            let current = head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    this.remove = function (element) {

        if (head.element === element) {
            head = head.next;
            return length--;
        }
        let previous = head;
        while (previous) {
            let current = previous.next;
            if (current) { // makes sure we are not at end where current.next would be null
                if (current.element === element) {
                    previous.next = current.next;
                    return length--;
                }
            }
            previous = current;
        }

    };
}

var ll = new LinkedList();
console.log(ll)