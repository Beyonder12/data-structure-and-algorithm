import java.lang.*;

class Node {
    int data;
    Node left, right;
    Node(int data) {
        this.data = data;
    }
    @Override
    public String toString() {
        return "Node { " + "data = ' " + data;
    }
}


public class Tree {
    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.left = new Node(6);
        root.right.right = new Node(7);
        
        System.out.println(root.getClass().getName());
    }

    
}
