const increasingBST = function(root) {
  let head = new TreeNode('Dummy');
  let cursor = head;

  inorder(root);
  return head.right;
}

function inorder(node) {
  if(!node)
    return;
  inorder(node.left)
  inorder(node.right)

  cursor.right = new TreeNode(node.val);
  cursor = cursor.right;

}
