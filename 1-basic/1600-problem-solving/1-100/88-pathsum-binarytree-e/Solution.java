
class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;
  TreeNode() {}
  TreeNode(int val) { this.val = val; }
  TreeNode(int val, TreeNode left, TreeNode right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


public class Solution {
  public static void main(String[] args) {
    System.out.println("hello");
    TreeNode tree = new TreeNode(5);
    tree.left = new TreeNode(4);
    tree.right = new TreeNode(8);
    tree.left.left = new TreeNode(11);
    // tree.left.right = new TreeNode(null);
    tree.right.left = new TreeNode(13);
    tree.right.right = new TreeNode(4);
    tree.left.left.left = new TreeNode(7);
    tree.left.left.right = new TreeNode(2);
    // tree.right.left.left = new TreeNode(null);
    // tree.right.left.right = new TreeNode(null);
    // tree.right.right.left = new TreeNode(null);
    tree.right.right.right = new TreeNode(1);

    System.out.println(hasPathSum(tree, 22));
  }

  public static boolean hasPathSum(TreeNode root, int sum) {
    if(root == null) return false;
    if(root.left == null && root.right == null && sum - root.val == 0) return true;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
  }
}

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1],
// targetSum = 22
// Output: true
