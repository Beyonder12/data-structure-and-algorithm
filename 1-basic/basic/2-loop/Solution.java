import java.io.*;
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.printf("%d xtimes1 %d = %d\n", n, i, n*i);
        }
    }
}