function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

var mergeTrees = function (t1, t2) {
    
    function helper(t1, t2) {
      if (!t1 && !t2) {
        return null;
      }
      
      let node = new TreeNode(0, null, null);
      if (t1 && t2) {
        node.val = t1.val + t2.val;
      } else if (t1) {
        node.val = t1.val;
      } else {
        node.val = t2.val;
      }
      node.left = helper(t1 ? t1.left : null, t2 ? t2.left : null);
      node.right = helper(t1 ? t1.right : null, t2 ? t2.right : null);
      return node;
    }
  
    return helper(t1, t2);
  };



console.log(mergeTrees([1,3,2,5],[2,1,3,null,4,null,7]));