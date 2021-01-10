import java.io.*;
import java.math.*;
import java.nio.ByteBuffer;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    static String solve(int a, int b, int c) {
        if(c%gcd(a,b) == 0 && c <=Math.max(a,b))
            return "YES";
        return "NO";
    }
    
    static int gcd(int a, int b){
        if(b==0)
            return a;
        return gcd(b, a%b);
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int t = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int tItr = 0; tItr < t; tItr++) {
            String[] abc = scanner.nextLine().split(" ");

            int a = Integer.parseInt(abc[0]);

            int b = Integer.parseInt(abc[1]);

            int c = Integer.parseInt(abc[2]);

            String result = solve(a, b, c);

            bufferedWriter.write(result);
            bufferedWriter.newLine();
        }

        bufferedWriter.close();

        scanner.close();
    }
}
