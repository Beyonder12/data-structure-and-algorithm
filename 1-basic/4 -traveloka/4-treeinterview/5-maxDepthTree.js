/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
  let max = -1;

 if(!root) return 0;

 function helper(node, depth) {
     if(!node) return;
     if(depth > max) max = depth;
     for(let c of node.children) {
         helper(c, depth + 1)
     }

 }


 helper(root, 1)
 return max;
};

var maxDepth = function(root) {
  if(!root) return 0;
  let max = 0;
  for(let child of root.children) {
     max = Math.max(max, maxDepth(child));
  }
  return max + 1;
}
