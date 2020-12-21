import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int tests = in.nextInt();
        for(int t = 0; t < tests; t++) {
            int n = in.nextInt();
            int k = in.nextInt();

            int max = 0;
            for (int m = 1; m < n; m++)
                for (int i = m +1; i <= n; i++) {
                    int result = m & i;
                    if (result < k) max = Math.max(max, result);
                    if (max == k-1) break;
                }
            System.out.println(max);   
        }
    }
    
}
