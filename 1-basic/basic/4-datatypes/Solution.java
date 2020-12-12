/*
the idea is detect the type of data

INPUT:
5
-150
150000
1500000000
213333333333333333333333333333333333
-100000000000000

-150 can be fitted in:
* short
* int
* long
150000 can be fitted in:
* int
* long
1500000000 can be fitted in:
* int
* long
213333333333333333333333333333333333 can't be fitted anywhere.
-100000000000000 can be fitted in:
* long
*/

import java.util.*;
import java.io.*;
import java.math.BigInteger;

public class Solution {
    public static void main(String[] argh) {
        long l1 = 9223372036854775807l;
        long l2 = -9223372036854775808l;
        long i1 = 2147483647l;
        long i2 = -2147483648l;
        long s1 = 32767l;
        long s2 = -32768l;
        long b1 = 127l;
        long b2 = -128l;

        BigInteger la = BigInteger.valueOf(l1);
        BigInteger lb = BigInteger.valueOf(l2);
        BigInteger ia = BigInteger.valueOf(i1);
        BigInteger ib = BigInteger.valueOf(i2);
        BigInteger sa = BigInteger.valueOf(s1);
        BigInteger sb = BigInteger.valueOf(s2);
        BigInteger ba = BigInteger.valueOf(b1);
        BigInteger bb = BigInteger.valueOf(b2);

        Scanner sc = new Scanner(System.in);
        int t=ts.nextInt();

        for(int i=0;i<t;i++) {
            BigInteger k = sc.nextBigInteger();

            int a1,a2,b5,b6,c1,c2,d1,d2;
            a1 = k.compareTo(la);
            a2 = k.compareTo(lb);
            b5=  k.compareTo(ia);
            b6 = k.compareTo(ib);
            c1 = k.compareTo(sa);
            c2 = k.compareTo(sb);
            d1 = k.compareTo(ba);
            d2 = k.compareTo(bb);

            if(a1==1 || a2 == -1){
                System.out.println(k + " can't be fitted anywhere.");
                }
            else{
            System.out.println(k +" can be fitted in:");
            }
    
            if ((d1== -1||d1==0) && (d2 == 1||d2==0)){
                System.out.println("* byte");
            }
    
            if ((c1== -1||c1==0) && (c2 == 1||c2==0)){
                System.out.println("* short");
            }
    
            if ((b5== -1||b5==0) && (b6 == 1||b6==0)){
                System.out.println("* int");    
            }
    
            if ((a1== -1||a1==0) && (a2 == 1||a2==0)){
                System.out.println("* long");    
            }
        }
    }
}
