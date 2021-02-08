import java.util.*;

public class Solution {

    public static int xorOperation(int n, int start) {
        int res = start;
        for (int i = 1; i < n; i++) {
            res = res ^ (start + 2 * i);
        }
        return res;
    }

    public static void main(String[] args) {
        System.out.println(xorOperation(5,0));
    }

}