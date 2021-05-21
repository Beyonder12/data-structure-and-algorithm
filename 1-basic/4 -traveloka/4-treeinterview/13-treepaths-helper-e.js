function TreeNode(val, left, right){
  this.val = val ? val : 0;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
// console.log(root)


function treePath(root) {
  let paths = [];

  function helper(node, path) {
    if(!node) return;
    // use the pre-order bst
    if(path === '')path = `${node.val}`;
    else path = `${path} -> ${node.val}`;
    if(!node.left && !node.right) {
      paths.push(path);
      return;
    }
    helper(node.left, path);
    helper(node.right, path);
  }


  helper(root, "")
  return paths;
}

console.log(treePath(root))
