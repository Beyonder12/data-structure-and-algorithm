import java.util.*;

public class Solution {
    public static int[] plusOne(int[] digits) {
        if(0 == digits.length) return digits;
        for (int i = digits.length-1; i >= 0; i--) {
            if(digits[i]!=9) {digits[i]++;return digits;}
                else digits[i] = 0;
        }

        int[] result = new int[digits.length+1];
        result[0] = 1;
        return result;

    }

    public static void main(String[] args) {
        int[] digits = new int[] {9,9,9};
        System.out.println(Arrays.toString(plusOne(digits)));
    }


}
