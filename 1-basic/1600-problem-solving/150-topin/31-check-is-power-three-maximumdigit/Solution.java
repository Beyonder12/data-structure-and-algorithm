import java.util.*;

public class Solution {
    public static boolean isPowerOfThree(int n) {
        //1162261467 is 3^19,  3^20 is bigger than int  
        return ( n> 0 && 1162261467%n==0);
    }

    public static void main(String[] args) {
        System.out.println(isPowerOfThree(6));
    }
}
