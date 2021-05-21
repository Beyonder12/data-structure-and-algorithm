function TreeNode(val, left, right){
  this.val = val ? val : 0;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

let root = new TreeNode(543);
root.left = new TreeNode(384);;
root.right = new TreeNode(652);;
// root.left.left = new TreeNode(4);
root.left.right = new TreeNode(445);;
// root.right.left = new TreeNode(6);;
root.right.right = new TreeNode(699);;
console.log(root)


var getMinimumDifference1 = function(root) {
  let prevNodeVal = Number.MAX_VALUE;
  let min = Number.MAX_VALUE;

  // traverse Inorder to compare elements sequentially to find min
  function helper(node) {
      if (!node) return;
      helper(node.left);
      min = Math.min(min, Math.abs(node.val - prevNodeVal))

      prevNodeVal = node.val;
      helper(node.right);
  }

  helper(root);
  return min;
};

var getMinimumDifference = function(root) {
  let res = [];

  function helper(node) {
      if(!node) return;

      res.push(node.val)
      helper(node.left);
      helper(node.right);
  }
  helper(root);
  let min = Infinity;
  // res is now an array of all value
  for(let i = 0; i < res.length; i++) {
    for(let j = i+1; j < res.length; j++) {
      min = Math.min(min, Math.abs(res[i] - res[j]))
    }
  }

  return min;
}

console.log(getMinimumDifference1(root))
console.log(getMinimumDifference(root))

