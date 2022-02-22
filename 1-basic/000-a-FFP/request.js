class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

console.log(tree);

function preOrderTree(node) {
    if(node == null) return;
    console.log(node.value);
    preOrderTree(node.left);
    preOrderTree(node.right);


}

console.log(preOrderTree(tree))