import java.io.*;
import java.util.*;



public class Solution {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();

        int[] numbers = new int[n];
        for (int i = 0; i < n; i++) {
            numbers[i] = in.nextInt();
        }

        for (int i = 0; i < numbers.length; i++) {
            if (isPrime(numbers[i]))
                System.out.println("Prime");
            else 
            System.out.println("Not prime");
        }
    }

    public static boolean isPrime(int number) {
        double numberSqrt = Math.sqrt(number);

        if (number <= 1)
            return false;
        
        else {
            for (int j = 2; j <= numberSqrt; j++) {
                if (number % j == 0) {
                    return false;
                }
            }
        }
        return true;
    }
}
