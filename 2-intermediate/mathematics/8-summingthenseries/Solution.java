import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;
import java.math.BigInteger;


public class Solution {
    
    static int summingSeries(long n) {
        BigInteger bi = new BigInteger(String.valueOf(n));
        BigInteger result = bi.pow(2).mod(new BigInteger(String.valueOf(1000000007)));
        return result.intValue();
    }
    
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int t = Integer.parseInt(scanner.nextLine().trim());

        for (int tItr = 0; tItr < t; tItr++) {
            long n = Long.parseLong(scanner.nextLine().trim());

            int result = summingSeries(n);

            bufferedWriter.write(String.valueOf(result));
            bufferedWriter.newLine();
        }

        bufferedWriter.close();
    }

}
