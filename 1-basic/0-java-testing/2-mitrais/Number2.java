import java.io.*;
import java.util.*;

public class Number2 {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for(int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);
            System.out.println("map for i : " + i + " -> " + map);
            if (map.containsKey(target - nums[i])) return new int[] {map.get(target - nums[i]), i};
        }
        return new int[] {0, 0};
    }

    public static void main(String[] args) {
        // Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        // int i = 1;
        // int[] nums = {1,2};
        // map.put(nums[i], i++);
        Stack<Character> stack = new Stack<>();
        String string = "abc";
        char[] charString = string.toCharArray();
        System.out.println((charString));
        System.out.println(Arrays.toString(charString));

        System.out.println(stack.isEmpty());

        // System.out.println(Arrays.toString(twoSum(new int[] {1,2,3,4,5}, 9)));
        // System.out.println(Arrays.toString(twoSum(new int[] {6,2,4}, 8)));
    }
}
