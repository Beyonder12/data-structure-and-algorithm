import java.nio.charset.Charset;
import java.util.*;

class Solution {


    public static void main(String[] args) {
        String s = "a";
        // String sub = s.substring(1,2);
        // System.out.println(sub);
        System.out.println(repeatedSubstringPattern(s));
        System.out.println(9%4);
    }


    public static boolean repeatedSubstringPattern(String str) {
        int l = str.length();//9
        for(int i = l/2; i >= 1; i--) {//4,3
            if(l%i == 0) {
                int m = l/i;
                String subS = str.substring(0, i);
                StringBuilder sb = new StringBuilder();
                for(int j = 0; j < m; j++) {
                    sb.append(subS);
                }
                if(sb.toString().equals(str)) return true;
            }
        }
        return false;
    }
}


