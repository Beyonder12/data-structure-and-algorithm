import java.util.*;

public class Solution {

    public static int firstUniqChar(String s) {
        Map<Character, Integer> map = new HashMap<>();
        // add every character to the hash map and increment the value of a key that's already found
        for(int i = 0; i < s.length(); i++)  {
            map.put(s.charAt(i), map.getOrDefault(s.charAt(i), 0) + 1);

        }

        // return the index of the key that first matches with the value of 1
        for(int i = 0; i < s.length(); i++) {
            if(map.get(s.charAt(i)) == 1) return i;
        }

        // default case
            return -1;
    }
    
    public static void main(String[] args) {
    
        System.out.println(firstUniqChar("leetcode"));
    }
}
