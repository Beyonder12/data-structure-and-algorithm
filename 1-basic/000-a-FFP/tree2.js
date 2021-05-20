//range sum bst
function TreeNode(val, left, right){
  this.val = val ? val : 0;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

let root = new TreeNode(1);
// root.left = new TreeNode(0);
root.right = new TreeNode(2);
// root.left.left = new TreeNode(4)
// root.left.right = new TreeNode(5);
// root.right.left = new TreeNode(6);
root.right.right = new TreeNode(3);
root.right.right.right = new TreeNode(4);
root.right.right.right.right = new TreeNode(5);

console.log(root)

// let root = new TreeNode(10);
// root.left = new TreeNode(5);
// root.right = new TreeNode(15);
// root.left.left = new TreeNode(3)
// root.left.right = new TreeNode(7);
// root.right.left = new TreeNode(13);
// root.right.right = new TreeNode(18);
// root.left.left.left = new TreeNode(1);
// root.left.right.left = new TreeNode(6);
// console.log(root)

var rangeSumBST = function(root, low, high) {
  var sum = 0;

  function helper(node, l, h) {
      if (node == null) {
        return sum;
    }

    if (node.val > l) {
        sum += rangeSumBST(node.left, l, h);
    }
    if (node.val <= high && node.val >= low) {
        sum += node.val;
    }
    if (node.val < h) {
        sum += rangeSumBST(node.right, l, h);
    }
  }
  helper(root, low, high)

  return sum;
};

console.log(rangeSumBST(root, 1, 7))
console.log(rangeSumBST(root, 6, 10))


let map = new Set();
map.add(1)
console.log(map)
