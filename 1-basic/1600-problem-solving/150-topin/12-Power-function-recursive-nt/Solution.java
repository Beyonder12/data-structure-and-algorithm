import java.util.*;

public class Solution {
    public static double myPow(double x, int n) {
        double output = backtrack(x, Math.abs(n));
        return n >=0 ? output : (1/output);
    }

    // n > 0;
    private static double backtrack(double x, long n) {
        if (n == 0) return 1.0;
        double backtrack = backtrack(x, n/2);
        return backtrack * backtrack * (n%2 == 0 ? 1 : x);
    }

    public static void main(String[] args) {
        System.out.println(myPow(2,-2));
    }
}
