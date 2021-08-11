import java.util.*;


class Node1 {
    int data;
    Node left, right;
    Node1 (int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

 class Solution1 {
    

    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.left = new Node(6);
        root.right.right = new Node(7);

        levelOrder(root);

        Queue<Node> queue = new LinkedList<>();
        Queue<Integer> queueInt = new LinkedList<>();
        // queue.add(1);
        // queue.add(2);
        // queue.add(3);
        // queue.add(4);
        // queue.add(5);
        // System.out.println(queue);
        // System.out.println(queue.peek());
        // System.out.println(queue);
        // System.out.println(queue.offer(null));
        queue.offer(root);
        System.out.println(queue.size());

        queueInt.offer(1);
        queueInt.offer(2);
        System.out.println(queueInt);


    }


    public static List<List<Integer>> levelOrder1(Node root) {
        Queue<Node> queue = new LinkedList<Node>();
        List<List<Integer>> wrapList = new LinkedList<List<Integer>>();
        
        if(root == null) return wrapList;
        
        queue.offer(root);
        while(!queue.isEmpty()){
            int levelNum = queue.size();
            List<Integer> subList = new LinkedList<Integer>();
            for(int i=0; i<levelNum; i++) {
                if(queue.peek().left != null) queue.offer(queue.peek().left);
                if(queue.peek().right != null) queue.offer(queue.peek().right);
                subList.add(queue.poll().data);
            }
            wrapList.add(subList);
        }
        System.out.println(wrapList);
        return wrapList;
    }

    public static List<List<Integer>> levelOrder(Node root) {
        Queue<Node> queue = new LinkedList<Node>();
        List<List<Integer>> wrapList = new LinkedList<List<Integer>>();

        if(root == null) return wrapList;

        queue.offer(root);
        while(!queue.isEmpty()) {
            int levelNum = queue.size();
            List<Integer> subList = new LinkedList<>();
            for(int i = 0; i < levelNum; i++) {
                if(queue.peek().left !=null) queue.offer(queue.peek().left);
                if(queue.peek().right != null) queue.offer(queue.peek().right);
                subList.add(queue.poll().data);
            }
            wrapList.add(subList);
        }
        return wrapList;
    }
}


class Node {
    int data;
    Node left, right;
    Node(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
        
}

class Solution {

    
    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.left = new Node(6);
        root.right.right = new Node(7);

                //     1
                //    / \
                //   2   3
                //  /\   /\
                // 4  5 6  7
        System.out.println(inorderTraversal(root));
    }

    public static List<Integer> inorderTraversal(Node root) {
        List<Integer> result = new ArrayList<>();
        helper(root, result);
        return result;

    }

    private static void helper(Node root, List<Integer> result) {
        if(root != null) {
            if(root.left != null) helper(root.left, result);
            result.add(root.data);
            if(root.right != null) helper(root.right, result);

        }

    }

}