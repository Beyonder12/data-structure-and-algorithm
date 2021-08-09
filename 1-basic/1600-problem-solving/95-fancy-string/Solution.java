import java.util.ArrayList;
import java.util.List;

class Solution {
    private static String makeFancyString(String s) {
        char prev = s.charAt (0);
        int freq = 1;
        // StringBuilder res = new StringBuilder ();
        String res = "";
        res += (s.charAt (0));
        for (int i = 1; i < s.length (); i++) {
            if (s.charAt (i) == prev)
                freq++;
            else {
                prev = s.charAt (i);
                freq = 1;
            }
            if (freq < 3)
                res+= (s.charAt (i));
        }
        return res;
    }
    public static void main(String[] args) {
        System.out.println(makeFancyString("leeetcode"));
        StringBuilder sb = new StringBuilder();
        sb.append("a");
        System.out.println(sb.getClass().getSuperclass());

        List<String> list = new ArrayList<>();
        list.add("satu");
        list.add("dua");
        list.add("tiga");
        System.out.println(list.size());

    }
}