
// Ideas
// sum + (n - 1) * move = target * n
// target = min + move
// sum - move = min * n
class minMoves {

    public int minMoves(int[] nums) {
        int min = Integer.MAX_VALUE;
        int sum = 0;
        for(int num : nums) {
            min = Math.min(min, num);
            sum += num;
        }
    
    }
}


/*
class Solution {
    public int minMoves(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return 0;
        }

        int min = nums[0];
        long sum = 0;
        for (int num : nums) {
            sum += num;
            min = Math.min(min, num);
        }
        return (int)(sum - nums.length * min);
    }
}
*/