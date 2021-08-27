import java.util.Arrays;

class Solution {

    public static void main(String[] args) {
        // Input: temperatures = [73,74,75,71,69,72,76,73]
        // Output: [1,1,4,2,1,1,0,0]

        int[] input = new int[] {73,74,75,71,69,72,76,73};
        int[] stack = new int[input.length];
        int top = -1;
        System.out.println(Arrays.toString(dailyTemperatures(input)));
        while(top > -1 && input[0] > input[stack[top]]) {
            System.out.println("helo");
        }
        for(int i = 0; i < 4; i++) stack[++top] = i;
        
        System.out.println(Arrays.toString(stack));
        
    }

    public static int[] dailyTemperatures(int[] temperatures) {
        int[] stack = new int[temperatures.length];
        int top = -1;
        int[] ret = new int[temperatures.length];
        for(int i = 0; i < temperatures.length; i++) {

            while(top > -1 && temperatures[i] > temperatures[stack[top]]) {
                int idx = stack[top--];
                ret[idx] = i - idx;
            }
            stack[++top] = i;

        }
        return ret;
    }
}

