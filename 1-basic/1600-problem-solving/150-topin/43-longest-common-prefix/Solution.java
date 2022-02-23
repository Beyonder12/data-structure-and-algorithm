import java.util.*;

public class Solution {
    public static String longestCommonPrefix(String[] strs) {
        if(strs.length == 0) return "";
        Arrays.sort(strs);
        String first = strs[0];
        String last = strs[strs.length - 1];
        int c = 0;

        while (c < strs.length) {
            if(first.charAt(c) == last.charAt(c)) c++;
            else break;
        }
        return first.substring(0, c);
    }

    public static void main(String[] args) {
        String [] strs = new String[] {"flower","flow","flight"};
        System.out.println(longestCommonPrefix(strs));
    }
}
