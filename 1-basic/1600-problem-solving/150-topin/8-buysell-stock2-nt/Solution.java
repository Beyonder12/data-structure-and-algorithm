import java.util.*;

public class Solution {


    static int maxProfit(int[] prices) {
        int maxprofit = 0;
        for (int i = 1; i < prices.length; i++) {
            if(prices[i] > prices[i-1])
                maxprofit += prices[i] - prices[i - 1];
        }
        System.out.println("the maximum profit is: ");
        return maxprofit;
        
    }

    public static void main(String[] args) {
        int[] prices = new int[] {1,2,3,4,5};
        System.out.println(maxProfit(prices));
    }
    
    
}

// Time Complexity : O(n) Space Complexity : O(1)