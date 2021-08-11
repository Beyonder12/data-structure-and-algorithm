import java.util.*;

public class Solution1 {

    public static void main(String[] args) {
        // TreeNode treeNode = new TreeNode(1);

        // System.out.println((treeNode).toString());

        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.right.right = new Node(6);

        List<Integer> result = new ArrayList<>();
        leftViewOfTree instance = new leftViewOfTree();
        instance.leftView(root, 1, result);

        for(Integer integer : result) {
            System.out.print(integer + " " );
        }

        // System.out.println(root);
    }  
}

class Node {
    int data;
    Node left, right;
    
    public Node(int data) {
        this.data = data;
        this.left = this.right = null;
    }
}


class leftViewOfTree {
    int maxLevel = 0;

    void leftView(Node root, int level, List<Integer> result) {
        if (root == null) return ;

        if(maxLevel < level) {
            result.add(root.data);
            maxLevel = level;
        }
        leftView(root.left, level + 1, result);
        leftView(root.right, level + 1, result);
    }
}


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

