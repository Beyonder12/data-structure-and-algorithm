import java.util.*;

public class Solution {
    public static int removeDuplicates(int[] nums) {
        int l = nums.length > 0 ? 1 : 0;
        for (int num : nums) 
            if (num > nums[l-1])
                nums[l++] = num;
        return l;
    }

    public static void main(String[] args) {
        int[] nums = new int[] {1,1,2,2};
        System.out.println(removeDuplicates(nums));
    }
}
