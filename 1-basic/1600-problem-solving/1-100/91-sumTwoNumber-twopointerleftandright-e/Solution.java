import java.util.Arrays;

public class Solution {
  public static int[] twoSum(int[] nums, int target) {
    int l = 0, r = nums.length - 1;
    while(nums[l] + nums[r] != target) {
      if(nums[l] + nums[r] > target) r--;
      else l--;
    }
    return new int[] {l+1, r+1};
  }
  public static void main(String[] args) {
    System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
  }
}
