import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;


public class Solution {
    static int primeCount(long n) {
        if (n == 1) {
            return 0;
        }

        Set<Long> primes = new HashSet();

        outer: for (long i = 2; i <= n; i++) {
            boolean overMax = false;
            long product = 1;

            for (long prime : primes) {
                if (product * prime * i > n ) {
                    overMax = true;
                    break;
                }

                if (i % prime == 0) {
                    continue outer;
                }
                product *= prime;
            }
            if (!overMax) {
                primes.add(i);
            } else {
                break;
            }
        }
        return primes.size();
    }

    private static final Scanner scanner = new Scanner (System.in);
    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter (new OutputStreamWriter(System.out));
        int q = Integer.parseInt(scanner.nextLine().trim());

        for (int qItr = 0; qItr < q; qItr++) {
            long n = Long.parseLong(scanner.nextLine().trim());

            int result = primeCount(n);

            bufferedWriter.write(String.valueOf(result));
            bufferedWriter.newLine();
        }
        
        bufferedWriter.close();
    }
}
