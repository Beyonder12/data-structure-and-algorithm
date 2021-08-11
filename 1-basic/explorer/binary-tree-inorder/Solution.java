import java.util.*;

class TreeNode {
    int data;
    TreeNode right, left;

    TreeNode(int data) {
        this.data = data;
        this.left = this.right = null;
 
    }
}
//Recursive Approach
class Solution {
    
    public static void main(String[] args) {

        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        

        System.out.println(inorderTraversal(root));
        System.out.println(inorderTraversal1(root));
    }

    public static List < Integer > inorderTraversal1(TreeNode root) {
        List < Integer > res = new ArrayList < > ();
        Stack < TreeNode > stack = new Stack < > ();
        TreeNode curr = root;
        while (curr != null || !stack.isEmpty()) {
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            res.add(curr.data);
            curr = curr.right;
        }
        return res;
    }

    public static List<Integer> inorderTraversal(TreeNode root) {
        List <Integer> res = new ArrayList<>();
        helper(root, res);
        return res;
    }

    private static void helper(TreeNode root, List<Integer> res) {
        if(root != null) {
            if(root.left != null) {
                helper(root.left, res);
            }
            res.add(root.data);
            if(root.right != null) {
                helper(root.right, res);
            }
        }
    }
}