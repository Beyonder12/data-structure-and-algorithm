var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {

    this.root = null;

    this.add = function (integer) {

        let curr = this.root;

        if(!curr) {
            this.root = new Node(integer);
            return undefined;
        };

        while(curr) {
            if (integer < curr.value) {
                if(!curr.left) {
                    curr.left = new Node(integer);
                    return undefined;
                }
                curr = curr.left;
            }
            else if (integer > curr.value) {
                if (!curr.left) {
                    curr.left = new Node(integer);
                    return undefined;
                }
                curr = curr.left;
    
            }
            else if (integer > curr.value) {
                if (!curr.right) {
                    curr.right = new Node(integer);
                    return undefined;
                }
                curr = curr.right;
            }
            else return null;
        }
    }
}