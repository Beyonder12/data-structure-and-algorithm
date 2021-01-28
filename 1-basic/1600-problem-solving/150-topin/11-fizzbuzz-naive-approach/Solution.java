import java.util.*;

public class Solution {

    public static List<String> fizzBuzz(int n) {

        // ans list
        List<String> ans = new ArrayList<String>();

        for (int i = 1; i <= n; i++) {
            
            boolean divisibleBy3 = (i % 3 == 0);
            boolean divisibleBy5 = (i % 5 == 0);

            if (divisibleBy3 && divisibleBy5) {
                // Divides by both 3 and 5,  add FizzBuzz
                ans.add("FizzBuzz");
            } else if (divisibleBy3) {
                ans.add("Fizz");
            } else if (divisibleBy5) {
                ans.add("Buzz");
            } else {
                // Not divisible by 3 or 5, add the number
                ans.add(Integer.toString(i));
            }
        }

        return ans;
    }

    public static void main(String[] args) {
        System.out.println(fizzBuzz(15));
    }
    
}
