function TreeNode(val, left, right){
  this.val = val ? val : null;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);;
root.right = new TreeNode(3);;
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);;
root.right.left = new TreeNode(6);;
root.right.right = new TreeNode(7);;
console.log(root)


function findTarget(root, k) {

  let set = new Set();
  function go(node) {
    if(!node) return false;
    if(set.has(k - node.val)) return true;
    set.add(node.val);
    return go(node.left) || go(node.right)
  }

  return go(root)
}
let i = 0
while(i) {
  console.log(i, findTarget(root, i));
  i--
}

let  a = 'f';
a = a.concat('b')
console.log(a)


