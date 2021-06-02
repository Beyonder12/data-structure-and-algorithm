import java.io.*;
import java.util.*;

class Node{
  int data;
  Node left, right;

  public Node(int data) {
    this.data = data;
    this.left = this.left = this.right = null;
  }
}

class LeftViewOfTree {
  int maxLevel = 0;

  void leftView(Node root, int level, List<Integer> result) {
    if(root == null) {
      return;
    }
    if (maxLevel < level) {
      result.add(root.data);
      maxLevel = level;
    }
    leftView(root.left, level+1, result);
    leftView(root.right, level+1, result);
  }
}

public class Solution_1 {
  public static void main(String[] args) {

    Node root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);

    List<Integer> result = new ArrayList<>();
    LeftViewOfTree instance = new LeftViewOfTree();
    instance.leftView(root, 1, result);

    for(Integer integer : result) {
      System.out.println(integer + " ");
    }
    System.out.println(root + "");
  }
}
