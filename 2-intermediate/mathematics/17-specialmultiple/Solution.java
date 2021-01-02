import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        while(T!=0) {
            int n = sc.nextInt();
            int i = 1;
            while (true) {
                long num = Long.parseLong(Integer.toBinaryString(i).replace("1", "9"));
                if (num % n == 0) {
                    System.out.println(num);
                    break;
                }
            i++;
            }
            T--;
        }
    }  
}
