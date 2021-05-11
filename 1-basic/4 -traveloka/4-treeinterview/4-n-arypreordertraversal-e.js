/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
  let res = [];

  //base case
  if(!root) return res;

  function dfs(node) {
      if(!node) return;
      res.push(node.val);
      for(c of node.children) {
          dfs(c)
      }
  }

  dfs(root)
  return res;
};
