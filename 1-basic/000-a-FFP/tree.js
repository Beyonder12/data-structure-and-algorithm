function TreeNode(val, left, right){
  this.val = val ? val : null;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);;
root.right = new TreeNode(3);;
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);;
root.right.left = new TreeNode(6);;
root.right.right = new TreeNode(7);;
console.log(root)


function bstPreOrder(root) {
  let res = [];

  function helper(node) {
    if(!node) return;


    helper(node.left);

    // helper(node.right);
    res.push(node.val);
  }

  helper(root)
  return res;

}

console.log(bstPreOrder(root))
