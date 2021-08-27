import java.util.*;

class Solution {


    public static void main(String[] args) {
        // Input: tokens = ["2","1","+","3","*"]
        // Output: 9
        // Explanation: ((2 + 1) * 3) = 9

        // Input: tokens = ["4","13","5","/","+"]
        // Output: 6
        // Explanation: (4 + (13 / 5)) = 6

        // Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
        // Output: 22
        // Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
        // = ((10 * (6 / (12 * -11))) + 17) + 5
        // = ((10 * (6 / -132)) + 17) + 5
        // = ((10 * 0) + 17) + 5
        // = (0 + 17) + 5
        // = 17 + 5
        // = 22

        String[] tokens = new String[] {"2","1","+","3","*"};
        System.out.println(polishReverse(tokens));

        String[] tokens1 = new String[] {"4","13","5","/","+"};
        System.out.println(polishReverse(tokens1));

        String[] tokens2 = new String[] {"10","6","9","3","+","-11","*","/","*","17","+","5","+"};
        System.out.println(evalRPN(tokens2));
        
    }
    
    public static int evalRPN(String[] tokens) {
        int a, b;
        Stack<Integer> S = new Stack<Integer>();
        for(String s : tokens) {
            if(s.equals("+")) {
                S.push(S.pop() + S.pop());
            }
            else if(s.equals("/")) {
                b = S.pop();
                a = S.pop();
                S.push(a/b);
            }
            else if(s.equals("*")) {
                S.push(S.pop() * S.pop());
            }
            else if(s.equals("-")) {
                b = S.pop();
                a = S.pop();
                S.push(a - b);
            }
            else {
                S.push(Integer.parseInt(s));
            }
        }
        return S.pop();
    }

    public static int polishReverse(String[] tokens) {
        int a,b;
        Stack<Integer> stack = new Stack<Integer>();
        for(String token : tokens) {
            if(token.equals("+")) {
                stack.add(stack.pop() + stack.pop());
            }
            else if(token.equals("/")) {
                b = stack.pop();
                a = stack.pop();
                stack.add(a / b);
            }
            else if (token.equals("*")) {
                stack.add(stack.pop() * stack.pop());
            }
            else if(token.equals("-")) {
                b = stack.pop();
                a = stack.pop();
                stack.add(a - b);
            }
            else {
                stack.add(Integer.parseInt(token));
            }
        }
        return stack.pop();
    }
}



