var  displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    // Change code below this line
    this.invert = function(node = this.root) {
        if (node) {
            const temp = node.left;
            node.left = node.right;
            node.right = temp;
            this.invert(node.left);
            this.invert(node.right);
        }
        return node;
    }
}