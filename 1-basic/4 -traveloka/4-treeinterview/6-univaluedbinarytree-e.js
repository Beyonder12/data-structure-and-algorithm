var isUnivalTree = function(root) {

  if(!root) return false;

  let value = root.val;
  let result = null;

  const helper = function(node){
      if(node === null) return;

      if(node.left)   helper(node.left);
      if(node.right)  helper(node.right);

      if(node.val !== value){
          result = false;
      }
  }
  helper(root);
  return result;

};
