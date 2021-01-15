import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for (int a0 = 0; a0 < t; a0++) {
            String s = in.next();
            Stack<Integer> st = new Stack<Integer>();
            char a[] = s.toCharArray();
            int comp = 0;
            for (int i = 0; i < s.length(); i++) {
                if (i > 0 && !st.isEmpty()) {
                    comp = st.peek();
                }
                st.push((int) a[i]);
                if (comp != 0 && !st.isEmpty() && st.size() > 1) {
                    if ((comp == 91 && st.peek() == 93) || (comp == 123 && st.peek() == 125)
                            || (comp == 40 && st.peek() == 41)) {
                        st.pop();
                        st.pop();
                    }
                }
            }
            if (st.isEmpty()) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }
        }
    }
}
/*
input:

3
{[()]}
{[(])}
{{[[(())]]}}

output:
YES
NO 
YES
*/
