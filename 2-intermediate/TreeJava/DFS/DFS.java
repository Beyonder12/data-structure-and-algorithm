import java.util.Stack;
import java.io.*;

class DFS {
  public static void main(String[] args) throws Exception {
    BinaryTree bt = BinaryTree.create();

    System.out.println("Printing nodes of a binary tree on InOrder using recursion");
    bt.inOrder();
    System.out.println();
    System.out.println("printing nodes of binary tree on InOrder using interation");
    bt.inOrderWithoutRecursion();
  }
}

class BinaryTree {
  static class TreeNode {
    String data;
    TreeNode left, right;
    TreeNode(String value) {
      this.data = value;
      left = right = null;
    } boolean isLeaf() {
      return left == null ? right == null : false;
    }
  }
  // root of binary tree TreeNode root; /** * traverse the binary tree on InOrder traversal algorithm */
  public void inOrder() {
    inOrder(root);
  }
  private void inOrder(TreeNode node) {
    if (node == null) {
      return;
    }
    inOrder(node.left);
    System.out.printf("%s ", node.data);
    inOrder(node.right); }

    public void inOrderWithoutRecursion() {
      Stack nodes = new Stack<>();
      TreeNode current = root;
      while (!nodes.isEmpty() || current != null) {
        if (current != null) {
          nodes.push(current); current = current.left;
        } else {
          TreeNode node = nodes.pop();
          System.out.printf("%s ", node.data);
          current = node.right;
        }
      }
    }
    /** * Java method to create binary tree with test data * * @return a sample binary tree for testing */
    public static BinaryTree create() {
      BinaryTree tree = new BinaryTree();
      TreeNode root = new TreeNode("4");
      tree.root = root;
      tree.root.left = new TreeNode("2");
      tree.root.left.left = new TreeNode("1");
      tree.root.left.right = new TreeNode("3");
      tree.root.right = new TreeNode("5");
      tree.root.right.right = new TreeNode("6");
      return tree;
    }
  }


