import java.util.*;

public class Solution {
    public static boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>(nums.length);
        for (int x: nums) {
            if (set.contains(x)) return true;
            set.add(x);
        }
        return false;
    }
    
    public static void main(String[] args) {
        int[] nums = new int[] {1,1,2,3,4};
        System.out.println(containsDuplicate(nums));
    }
}

// Time complexity : O(n) we do search() and insert() for n times
// each operation takes constant time.

// Space complexity : the space used by a hash table is linear with number 
// elements in it