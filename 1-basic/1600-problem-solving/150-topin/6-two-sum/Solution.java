import java.util.*;

class Solution {
    static int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map = new HashMap<>();
       
        int complement;
        int res[] = new int[2];
        for(int i=0; i< nums.length;i++) {
            complement = target -nums[i];
            if(map.containsKey(complement)) {
                res[0] = i;
                res[1] = map.get(complement);
                return res;
            } else{
                map.put(nums[i],i);
            }
        }
        
        return res;
    }

    public static void main(String args[]) {
        int[] nums = new int[] {2,7,11,15};
        int target = 9;
        System.out.println(Arrays.toString(twoSum(nums, target)));
    }
}