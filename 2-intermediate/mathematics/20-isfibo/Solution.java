import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;


public class Solution {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();

        for (int tItr = 0; tItr < t; tItr++) {
            long n = sc.nextLong();
            long a = 0;
            long b =1;
            long c = 0;
            while(c!=n && c <=n) {
                c=a+b;
                a=b;
                b=c;
            }
            if(c==n)
                System.out.println("IsFibo");
            else 
                System.out.println("IsNotFibo");
        }
        sc.close();
    }
    
}
