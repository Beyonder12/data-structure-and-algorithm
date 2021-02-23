// Breadt First Search

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;

    this.add = (value) => {
        curr = this.root;
        if(!curr) {
            this.root = new Node(value);     
        } else {
            while(curr) {
                if(value < curr.value) {
                    if(!curr.left) {
                        curr.left = new Node(value);
                        return;
                    }
                    curr = curr.left;
                }
                else if(value > curr.value) {
                    if(!curr.right) {
                        curr.right = new Node(value);
                        return ;
                    }
                    curr = curr.right;
                 
                } 
                
            }
        }
        
       
    };

    this.levelOrder = (root = this.root) => {
        if(!root) return null;
        let queue = [root];
        let results = [];
        while(queue.length > 0) {
            let node = queue.shift();
            results.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return results;
    }
    
    this.reverseLevelOrder = (root = this.root) => {
        if(!root) return null;
        let queue = [root];
        let results = [];
        while ( queue.length > 0 ) {
            let node = queue.shift();
            results.push(node.value);
            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left);
        }
        return results;
    }
}

let bst = new BinarySearchTree();
bst.add(100);
bst.add(200);
bst.add(50);
bst.add(300);
bst.add(400);
bst.add(500);
console.log(bst.levelOrder());
console.log(bst.reverseLevelOrder());
// displayTree(bst);
// console.log(bst)