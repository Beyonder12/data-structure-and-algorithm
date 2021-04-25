
 // Definition for a binary tree node.
  function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */



var increasingBST = function(root) {
   let result = []; // node value from in order

   function inOrder(node) {
     if(!node) return;
     inOrder(node.left);
     result.push(node.val);
     inOrder(node.right)
   }

   inOrder(root);
   console.log(result)
    
};

root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
console.log(new TreeNode(root))
console.log(increasingBST(root))