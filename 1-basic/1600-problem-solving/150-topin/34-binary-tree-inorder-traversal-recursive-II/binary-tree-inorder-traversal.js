/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *         this.val = (val === undefined ? 0 : val)
 *         this.left = (left === undefined ? null : left)
 *         this.right = (right === undefined ? null : right)
 * }
 */

 /**
  * @param {TreeNode} root
  * @return {number[]}
  */

  const inorderTraversal = root => {
      if (!root) {
          return [];
      }

      return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
  }

  root = {
      val : 1,
      left: {val: 2, left: {val: 4, left: null, right: null}, right: {val: 6, left: null, right: null}},
      right: {val: 3, left: {val: 5, left: null, rigth: null}, right: {val: 7, left: null, right: null}},
  }

  console.log(inorderTraversal(root))