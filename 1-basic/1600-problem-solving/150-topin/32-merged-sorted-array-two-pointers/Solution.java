import java.util.*;

public class Solution {
    public static int[] merge(int[] nums1, int m, int[] nums2, int n) {
        int index = m+n-1;
        int first = m - 1;
        int second = n - 1;
        while(first >= 0 || second >= 0) {
            int num1 = first >= 0 ? nums1[first] : Integer.MIN_VALUE;
            int num2 = second >= 0 ? nums2[second] : Integer.MIN_VALUE;
            if(num1 > num2) {
                nums1[index] = num1;
                first--;
            }else {
                nums1[index] = num2;
                second--;
            }
            index--;
        }
        return (nums1);
    }
    
    public static void main(String[] args) {
        int [] nums1 = new int[] {6,8,13,0,0,0};
        int m = 3;
        int [] nums2 = new int[] {2,5,6};
        int n = 3;
        System.out.println(Arrays.toString(merge(nums1, m, nums2, n)));
    }
    
}
