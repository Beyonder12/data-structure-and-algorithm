import java.util.*;

public class Solution {

    public static int xorOperation(int n, int start) {
        int res = start;
        for (int i = 1; i < n; i++) {
            res ^=  (start + 2 * i);
        }
        return res;
    }

    public static void main(String[] args) {
        System.out.println(xorOperation(5,1));
        System.out.println(1^3^5^7^9);
    }

}