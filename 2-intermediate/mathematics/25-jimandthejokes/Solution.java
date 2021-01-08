import java.util.Scanner;
import java.util.stream.LongStream;

public class Solution {
    public static void main(String[] args) {
        final long t[] = new long[38];
        try (final Scanner in = new Scanner(System.in)) {
            for (int n = in.nextInt(); n > 0; n--) {
                final int m = in.nextInt();
                final int d = in.nextInt();
                final String s = Integer.toString(d);
                if (m > 1 && s.chars().noneMatch(c -> c >= '0' + m)) {
                    t[Integer.parseInt(s, m)]++;
                }
            }
            System.out.println(LongStream.of(t).map(k -> k * (k - 1) / 2).sum());
        }
    }
    
}
