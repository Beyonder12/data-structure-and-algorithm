var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;

    this.add = function(data) {
        let curr = this.root;

        if(!curr) {
            this.root = new Node(data);
            return undefined;
        };

        while (curr) {
            if (data < curr.value) {
                if(!curr.left) {
                    curr.left = new Node (data);
                    return undefined;
                }
                curr = curr.left;
            }
            else if (data > curr.value) {
                if (!curr.right) {
                    curr.right = new Node(data);
                    return undefined;
                }
                curr = curr.right;
            }
            else return null;
        }
    }

    this.inorder = function(root = this.root, arr = []) {
        if(!root) return null;
        this.inorder(root.left, arr);
        arr.push(root.value);
        this.inorder(root.right, arr);
        return arr;
    }

    this.preorder = function(root=this.root, arr = []) {
        if(!root) return null;
        arr.push(root.value);
        this.preorder(root.left, arr);
        this.preorder(root.right, arr);
        return arr;
    }

    this.postorder = function(root=this.root, arr = []) {
        if(!root) return null;
        this.postorder(root.left, arr);
        this.postorder(root.right, arr);
        arr.push(root.value);
        return arr;
    }
}

let bst = new BinarySearchTree();
bst.add(1);
bst.add(4);
bst.add(5);
bst.add(2);
bst.add(3);
bst.add(6);
bst.add(7);
bst.add(8);
bst.add(9);

console.log(bst.inorder());
console.log(bst.preorder());
console.log(bst.postorder());