//Definition for a binary tree node
function TreeNode(val, left, right) {
  this.val = (val ===undefined ? 0 : val)
  this.left = (left ===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 *
 * @param {TreeNode} root
 * @returns {TreeNode}
 */

var invertTree = function(root) {
  dfs(root);

  return root;
}

function dfs(node) {

  if(!node) {
    return;
  }
  let temp = node.left;
  node.left = node.right;
  node.right = temp;

  dfs(node.left);
  dfs(node.right)

  return root
}
root = [4,2,7,1,3,6,9]
console.log(invertTree(root))


function inversionString(arr) {
  let i = 0, j = arr.length - 1;
  while(i< j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++; j--;
  }
  return arr;
}

console.log(inversionString([1,2,3,4,5]))
