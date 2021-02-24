var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;

    this.remove = function(value) {
        if (this.root === null) {
            return null;
        }
        var target;
        var parent = null;
        // Find the target value and its parent
        (function findValue(node = this.root) {
            if (value == node.value) {
                target = node;
            } else if(value < node.value && node.left !== null) {
                parent = node;
                return findValue(node.left);
            } else if (value < node.value && node.left === null) {
                return null;
            } else if (value > node.value && node.right !== null) {
                parent = node;
                return findValue(node.right);
            } else {
                return null;
            }
        }.bind(this)());
    }
}