function inorderDFS(root) {
  res = [];

  function helper(node) {
    if(!node) return;
    if (node.left) {
      helper(node.left)
    }
    if (node !== null) visited.push(node.val)
    if (node.right) {
      helper(node.right)
    }
  }

  helper(root);
  return res;
}
