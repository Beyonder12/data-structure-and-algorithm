import java.util.*;

public class Solution {

    public static int maxDepth(int[] root) {
        if(root == null) {
            return 0;
        }
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
    
    public static void main(String[] args) {
        System.out.println("hello");
    }
}
