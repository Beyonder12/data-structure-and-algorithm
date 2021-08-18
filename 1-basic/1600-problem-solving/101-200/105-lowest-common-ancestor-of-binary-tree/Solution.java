class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int _val) {
        val = _val;
    }
}


class Solution {
    public static TreeNode lowestCommonAncenstor(TreeNode root, TreeNode p, TreeNode q) {
        if(root == null || root == p || root == q) return root;

        TreeNode left = lowestCommonAncenstor(root.left, p, q);
        TreeNode right = lowestCommonAncenstor(root.right, p, q);
        if(root.left != null && root.right != null) return root;

        return left != null ? left : right;
    } 
}