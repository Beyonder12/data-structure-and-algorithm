class TreeNode {
  constructor(val,left, right) {
    this.val = val ? val : 0;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(9);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(7);
// root.right.right = new TreeNode(7);
console.log(root)
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var findTilt = function(root) {
  let tot = 0;

  function findSum(node) {
      // base case
      if (node == null) return 0;

      const left = findSum(node.left);
      const right = findSum(node.right);

      const sum = left + right;
      tot += Math.abs(left - right);
      return sum + node.val;
  }

  findSum(root);

  return tot;


};
console.log(findTilt(root))

let set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(1)
console.log(set)

