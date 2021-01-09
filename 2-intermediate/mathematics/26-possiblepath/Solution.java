import java.util.Scanner;

/*
input
3
1 1 2 3
2 1 2 3
3 3 1 1

output
YES
YES
NO


*/
public class Solution {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();
        for (int tc = 0; tc < T; tc++) {
            long a = sc.nextLong();
            long b = sc.nextLong();
            long x = sc.nextLong();
            long y = sc.nextLong();

            System.out.println(gcd(a, b) == gcd(x, y) ? "YES": "NO");
        }

        sc.close();
    }

    static long gcd(long p,  long q) {
        return q == 0 ? p : gcd(q, p%q);
    }
}
