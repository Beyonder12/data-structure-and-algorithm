class Solution {
    public static int findConsecutiveOne(int[] nums) {
        int max = 0, maxHere = 0;
        for(int n : nums) 
            max = Math.max(max, maxHere = n == 0 ? 0 : maxHere + 1);
        return max;
    }

    public static void main(String[] args) {
        int[] nums = new int[] {1,1,1,0,0,1,1,0,0,1,1,1,1,1,11};
        System.out.println(findConsecutiveOne(nums));
    }
}
