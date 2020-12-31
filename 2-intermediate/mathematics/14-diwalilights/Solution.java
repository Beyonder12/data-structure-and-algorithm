import java.util.Scanner;
import java.math.BigInteger;

public class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int T = scan.nextInt();
        for (int i = 0; i < T; i++) {
            int n = scan.nextInt();
            System.out.println((new BigInteger("2").pow(n).subtract(new BigInteger("1")).mod(new BigInteger("100000"))));
        }
        scan.close();
    }
    
}
