import java.util.*;

public class Solution {
    public static void main(String[] args) {
        System.out.println("hello world");
        System.out.println(mergeTrees(([1,3,2,5]),([2,1,3,null,4,null,7])));
    }
    
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        if (t1 == null)
            return t2;
        if (t2 == null)
            return t1;
        t1.val += t2.val;
        t1.left = mergeTrees(t1.left, t2.left);
        t1.right = mergeTrees(t1.right, t2.right);
        return t1;
    }

    

    
}


 


