/*
dequeue is double ended dequeu is and abstract data type that generalizes a queue for which elements can be added to or removed from either the front(head) or back (tail)
deque interfaces can be implemented using various types of collections such as
LinkedList or ArrayDeque classes. deque can be declared as follow\

Deque deque = new LinkedList<>();
or 
Deque deque = new ArrayDeque<>();
*/
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        Deque<Integer> deque = new ArrayDeque<>();
        HashSet<Integer> set = new HashSet<>();

        int n = in.nextInt();
        int m = in.nextInt();
        int max = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            int input  = in.nextInt();

            deque.add(input);
            set.add(input);

            if (deque.size() == m) {
                if (set.size() > max) max = set.size();
                int first = deque.remove();
                if (!deque.contains(first)) set.remove(first);
            }
        }

        System.out.println(max);
    }
}


