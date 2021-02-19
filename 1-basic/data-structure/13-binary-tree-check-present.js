var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    
    this.findMin = function() {
        // Empty tree.
        if (!this.root) {
            return null;
        }
        let currentNode = this.root;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    };

    this.findMax = function() {
        // Empty tree.
        if (!this.root) {
            return null;
        }
        let currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    };

    this.add = function(value) {
        // Empty tree.
        if (!this.root) {
            this.root = new Node(value);
            return undefined;
        };
        return this.addNode(this.root, value);
    };

    this.addNode = function(node, value) {
        // Check if value already exists.
        if (node.value === value) return null;
        if (value < node.value) {
            if (node.left) {
                return this.addNode(node.left, value);
            } else {
                node.left = new Node(value);
                return undefined;
            }
        } else {
            if (node.right) {
                return this.addNode(node.right, value);
            } else {
                node.right = new Node(value);
                return undefined;
            }
        }
    };

    // this.isPresent = function(value) {
    //     if (!this.root) {
    //         return null;
    //     }
    //     return this.isNodePresent(this.root, value);
    // };
    

    this.isPresent = function (data, node = this.root) {
        if (node === null) {
            return false;
        } else if (data < node.value) {
            return this.isPresent(data, node.left);
        } else if (data > node.value) {
            return this.isPresent(data, node.right);
        } else {
            return true;
        }
    }
}

let bst = new BinarySearchTree();

bst.add(100);
bst.add(200);
bst.add(50);

console.log(bst.isPresent(1));