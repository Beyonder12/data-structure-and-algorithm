import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
import java.util.Scanner;

public class Solution {

    public static int reverseGame(int ballCount, int ballNumber) {
        int n = ballCount - 1;
        int num = (-1) * n;
        int index;
        for (index = 0; index < ballCount; index++) {
            if (ballNumber == n) {
                break;
            }
            n += num;
            if(num<0) {
                num = ((-1) * num) - 1;
            }
            else {
                num = (-1) * (num - 1);
            }
        }
        return index;
    }
    public static void main(String[] args) {
        int T, N, K;
        Scanner scan = new Scanner(System.in);
        T = scan.nextInt();
        for(int loop = 1; loop <= T; loop++) {
            N = scan.nextInt();
            K = scan.nextInt();
            System.out.println(reverseGame(N, K));
        }
        scan.close();
    }
    
}

