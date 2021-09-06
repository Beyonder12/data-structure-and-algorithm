/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

import java.util.*;

class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
}

class Solution {
    static HashMap<Integer, Node> map = new HashMap<>();


    public static void main(String[] args) {
        test();

        int[] array = new int[] {1,1,1,2,2,3,3};
        int sum = array[0];
        for (int i = 0 ; i < array.length; i++) {
            sum = sum ^ i;
        }
        System.out.println( "sum : {} " + sum);
        System.out.println(1^1);
         
        // 0 0 0 1 1 0 => 0 0 0 0 1 1
        // 0 0 0 0 0 1
    }

    // public Node cloneGraph(Node node) {
    //     return clone(node);
    // }

    public static void test() {
        map.put(1, new Node());
        System.out.println(map);
    }
    // public Node clone(Node node) {
    //     if(node == null) return null;

       
    //     if(map.containsKey(node.val)) return map.get(node.val);

    //     Node newNode = new Node(node.val, new ArrayList<Node>());
    //     map.put(newNode.val, newNode);
    //     for(Node neighbor : node.neighbors) newNode.neighbors.add(clone(neighbor));
    //     return newNode;
    // }
}