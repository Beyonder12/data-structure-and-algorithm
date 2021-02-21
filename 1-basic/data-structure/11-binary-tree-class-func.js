var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {

  this.root = null;
  // change code below this line
  this.add = function (integer) {

    let curr = this.root;

    if (!curr) {
      this.root = new Node(integer);
      return undefined;
    };
    
    while (curr) {
      if (integer < curr.value) {
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

let bst = new BinarySearchTree();
bst.add(2);
bst.add(5);
bst.add(7);
bst.add(9);
displayTree(bst)
// console.log(bst)