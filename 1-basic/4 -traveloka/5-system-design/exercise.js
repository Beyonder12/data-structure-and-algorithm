class TreeNode{
  constructor(val, left, right) {
    this.val = val === undefined ? null: val;
    this.left = left === undefined ? null: left;
    this.right = right === undefined ? null: right;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(root)


function bst(root) {
  let res=[];

  function helper(node) {
    if(!node) return res;


    helper(node.left);
    res.push(node.val);
    helper(node.right);


  }

  helper(root)
  return res;
}

console.log(bst(root))
