import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        for(int i =0; i < n; i++) {
            int type = in.nextInt();
            int take = in.nextInt();
            if(take == 1) System.out.println(type);
            else {
                int temp = type;
                // BigInteger numerator = factorial(type+ take -1);
                BigInteger numerator = BigInteger.valueOf(1);
                while(temp <= (type+ take-1)) {
                    numerator = numerator.multiply(BigInteger.valueOf(temp));
                    temp++;
                }
                BigInteger denumerator = factorial(take);
                //BigInteger denumerator2 = factorial(type -1);
                BigInteger answer = numerator.divide(denumerator);
                //System.out.println(numerator);
                //System.out.println(denumerator);
                System.out.println(answer.mod(BigInteger.valueOf(1000000000)));
            }
        }
        in.close();
    }
    public static BigInteger factorial(int n) {
        if ( n == 1) return BigInteger.valueOf(1);
        else return BigInteger.valueOf(n).multiply(factorial(n-1));
    }
    
}
