import java.util.*;

public class Solution {
     public static int[] moveZeroes(int[] nums) {
        for(int i = 0, j = 0; j < nums.length; i++) {
            if(i >  nums.length-1) nums[j++] = 0 ;
            
            else if(nums[i] != 0) nums[j++] = nums[i];
            
        }
        return nums;
         
    }

    public static void main(String[] args) {
       int[] arr = new int[]{ 0,1,2,0,3 }; 
    //    System.out.println(arr[5] != 0);
       System.out.println(Arrays.toString(moveZeroes(arr)));
    }
}

// Time Complexity = O(N); Space Complexity = O(1)
