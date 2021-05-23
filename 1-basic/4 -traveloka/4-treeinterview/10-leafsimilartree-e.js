var leafSimilar = function(root1, root2) {
  const result1 = []
  const result2 = []

  function helper(node, result) {
      if(!node.left && !node.right) {
          result.push(node.val)
      }

      if(node.left) {
          helper(node.left, result)
      }
      if(node.right) {
          helper(node.right, result)
      }
  }

  helper(root1, result1)
  helper(root2, result2)

  if(result1.length !== result2.length) {
      return false
  }

  for(let i=0; i<result1.length; i++) {
      if(result1[i] !== result2[i]) {
          return false
      }
  }

  return true
};
