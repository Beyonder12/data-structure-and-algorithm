import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
        try (final Scanner in = new Scanner(System.in)) {
            final long r1 = in.nextLong() - 1;
            final long c1 = in.nextLong() - 1;
            System.out.println(r1 / 2 * 10 + c1 * 2 + r1 % 2);
        }
    }
    
}
