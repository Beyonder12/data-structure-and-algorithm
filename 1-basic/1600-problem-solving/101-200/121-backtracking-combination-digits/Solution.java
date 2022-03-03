import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public static void main(String[] args) {
        System.out.println(letterCombinations("23"));
        int[] digits = {9,9};
        System.out.println(Arrays.toString(digits));
        int[] digits1 = new int[digits.length + 1];
        System.out.println(Arrays.toString(digits1));
        digits1[0] = 1;
        System.out.println(Arrays.toString(digits1));
          
    }

    private static List<String> letterCombinations(String digits) {
        String[] digitLetter = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        List<String> result = new ArrayList<>();
        if(digits.length() == 0) return result;
        result.add("");
        for(int i = 0; i < digits.length(); i++) {
            result = combine(digitLetter[digits.charAt(i) - '0'], result);
        }
        
        return result;
    }

    private static List<String> combine(String digit, List<String> l) {
        List<String> result = new ArrayList<>();
        for(int i = 0; i < digit.length(); i++) {
            for(String x : l) {
                result.add(x + digit.charAt(i));
            } 
        }
        return result;
    }
}