import java.util.*;

public class Solution {
    static class ListNode {
        this.val = val;
    }

    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
    
    
}


//both time complexity and space complexity O(1)