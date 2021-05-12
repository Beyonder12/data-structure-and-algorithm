function averageLevelBst(root) {
  let res = [];

  function helper(node, depth) {
    if(!node) return;

    if(res[depth]===undefined) {
      res[depth] = [node.val, 1]
    } else {
      res += node.val;
      res[depth][1]++;
    }
    helper(node.left, depth+1);
    helper(node.right, depth +1)
  }

  helper(root,0);
  return res.map(([a,b])=>a/b);
}
