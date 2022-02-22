import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static int maxSubArray(int[] nums) {
        int n = nums.length, max = Integer.MIN_VALUE, sum = 0;

        for(int i = 0; i < n; i++) {
            sum += nums[i];
            max = Math.max(sum, max);
            if(sum < 0) sum = 0;
        }

        return max;
    }

    public static void main(String[] args) {
        List<Integer> nums = new ArrayList<>();
        nums.add(-2);
        nums.add(1);
        nums.add(-3);
        nums.add(4);
        nums.add(-1);
        nums.add(2);
        nums.add(1);
        nums.add(-5);
        nums.add(4);
        System.out.println(maxSubArray(new int[] {-2,1,-3,4,-1,2,1,-5,4}));
        System.out.println(maxSubArray(nums));
    }
}
