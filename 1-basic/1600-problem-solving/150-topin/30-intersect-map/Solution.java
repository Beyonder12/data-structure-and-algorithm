import java.util.*;


public class Solution {

    public static int[] intersect(int[] nums1, int[] nums2) {
        if(nums1.length == 0) 
            return nums1;
        if(nums2.length == 0)
            return nums2;
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int i = 0, j = 0, k = 0;
        while( i < nums1.length && j < nums2.length) {
            if(nums1[i] < nums2[j] )
                i++;
            else if (nums2[j] < nums1[i])
                j++;
            else if(nums1[i] == nums2[j]){
                nums1[k++] = nums1[i];
                i++;
                j++;
            }
        }
        return Arrays.copyOfRange(nums1, 0, k);
    }

    public static void main(String[] args) {
        int [] nums1 = new int [] {1,2,3};
        int [] nums2 = new int [] {1,2};
                                                                               
        System.out.println(Arrays.toString(intersect(nums1, nums2)));
    }
}
